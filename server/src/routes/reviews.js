const express = require('express');
const { query, param, body } = require('express-validator');
const { Spot, User, Review } = require('../models');
const { success, error, paginated } = require('../utils/response');
const { auth } = require('../middleware/auth');

const router = express.Router();

/**
 * 更新景点的评论统计（avgRating + reviewCount）
 */
async function updateSpotReviewStats(spotId) {
  const stats = await Review.aggregate([
    { $match: { spotId, status: 'approved' } },
    {
      $group: {
        _id: '$spotId',
        avgRating: { $avg: '$rating' },
        reviewCount: { $sum: 1 },
      },
    },
  ]);

  if (stats.length > 0) {
    await Spot.findOneAndUpdate(
      { spotId },
      {
        reviewCount: stats[0].reviewCount,
        avgRating: Math.round(stats[0].avgRating * 10) / 10,
      }
    );
  } else {
    // 没有评论时归零
    await Spot.findOneAndUpdate(
      { spotId },
      { reviewCount: 0, avgRating: 0 }
    );
  }
}

/**
 * GET /api/spots/:spotId/reviews
 * 获取景点评论列表（公开）
 */
router.get(
  '/spots/:spotId/reviews',
  [
    param('spotId').notEmpty().trim().withMessage('景点ID不能为空'),
    query('page').optional().isInt({ min: 1 }).toInt().withMessage('页码必须为正整数'),
    query('limit').optional().isInt({ min: 1, max: 100 }).toInt().withMessage('每页条数在1-100之间'),
    query('sort').optional().isIn(['latest', 'rating']).withMessage('排序参数无效'),
  ],
  async (req, res, next) => {
    try {
      const { spotId } = req.params;
      const { sort = 'latest' } = req.query;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;

      // 先确认景点存在
      const spotExists = await Spot.exists({ spotId });
      if (!spotExists) {
        return error(res, 'SPOT_NOT_FOUND', '景点不存在', 404);
      }

      const filter = { spotId, status: 'approved' };

      // 排序
      let sortOption;
      if (sort === 'rating') {
        sortOption = { rating: -1, createdAt: -1 };
      } else {
        sortOption = { createdAt: -1 };
      }

      const [reviews, total] = await Promise.all([
        Review.find(filter).sort(sortOption).skip((page - 1) * limit).limit(limit).lean(),
        Review.countDocuments(filter),
      ]);

      return paginated(res, reviews, page, limit, total);
    } catch (err) {
      next(err);
    }
  }
);

/**
 * POST /api/spots/:spotId/reviews
 * 发表评论（需要登录）
 */
router.post(
  '/spots/:spotId/reviews',
  auth,
  [
    param('spotId').notEmpty().trim().withMessage('景点ID不能为空'),
    body('rating')
      .isInt({ min: 1, max: 5 })
      .withMessage('评分必须是1-5的整数'),
    body('content')
      .trim()
      .isLength({ min: 1, max: 500 })
      .withMessage('评论内容长度在1-500字之间'),
    body('images')
      .optional()
      .isArray({ max: 9 })
      .withMessage('图片最多9张'),
    body('images.*')
      .optional()
      .isString()
      .withMessage('图片地址无效'),
  ],
  async (req, res, next) => {
    try {
      const { spotId } = req.params;
      const { rating, content, images = [] } = req.body;

      // 确认景点存在且在线
      const spot = await Spot.findOne({ spotId, status: 'online' });
      if (!spot) {
        return error(res, 'SPOT_NOT_FOUND', '景点不存在', 404);
      }

      // 获取用户信息
      const user = await User.findById(req.user.userId);
      if (!user) {
        return error(res, 'UNAUTHORIZED', '用户不存在', 401);
      }

      // 创建评论
      const review = await Review.create({
        spotId,
        userId: user._id,
        userName: user.nickname || '微信用户',
        userAvatar: user.avatar || '',
        rating,
        content,
        images,
        status: 'approved', // 先发后审
      });

      // 更新景点评分统计
      await updateSpotReviewStats(spotId);

      return success(res, review.toObject(), 201);
    } catch (err) {
      next(err);
    }
  }
);

/**
 * DELETE /api/reviews/:reviewId
 * 删除评论（仅作者本人）
 */
router.delete(
  '/reviews/:reviewId',
  auth,
  [param('reviewId').notEmpty().withMessage('评论ID不能为空')],
  async (req, res, next) => {
    try {
      const { reviewId } = req.params;

      const review = await Review.findById(reviewId);

      if (!review) {
        return error(res, 'REVIEW_NOT_FOUND', '评论不存在', 404);
      }

      // 只有评论作者才能删除
      if (review.userId.toString() !== req.user.userId) {
        return error(res, 'FORBIDDEN', '无权删除他人的评论', 403);
      }

      const spotId = review.spotId;
      await Review.findByIdAndDelete(reviewId);

      // 更新景点评分统计
      await updateSpotReviewStats(spotId);

      return success(res, null);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
