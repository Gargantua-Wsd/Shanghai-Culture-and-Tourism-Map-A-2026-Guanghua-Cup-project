const express = require('express');
const { param, body } = require('express-validator');
const { Spot, Itinerary } = require('../models');
const { success, error } = require('../utils/response');
const { auth } = require('../middleware/auth');

const router = express.Router();

/**
 * 验证行程中的景点是否存在（在线）
 * @returns {Promise<{valid: boolean, missing: string[]}>}
 */
async function validateSpotsExist(spots) {
  if (!spots || spots.length === 0) return { valid: true, missing: [] };

  const spotIds = spots.map((s) => s.spotId);
  const existingSpots = await Spot.find({
    spotId: { $in: spotIds },
    status: 'online',
  }).select('spotId').lean();

  const existingIds = new Set(existingSpots.map((s) => s.spotId));
  const missing = spotIds.filter((id) => !existingIds.has(id));

  return { valid: missing.length === 0, missing };
}

// ========== GET /api/itineraries ==========
// 获取当前用户的行程列表
router.get('/', auth, async (req, res, next) => {
  try {
    const itineraries = await Itinerary.find({ userId: req.user.userId })
      .sort({ updatedAt: -1 })
      .lean();

    return success(res, itineraries);
  } catch (err) {
    next(err);
  }
});

// ========== POST /api/itineraries ==========
// 新增行程
router.post(
  '/',
  auth,
  [
    body('name')
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('行程名称长度在1-50个字符之间'),
    body('spots')
      .isArray({ min: 1 })
      .withMessage('行程至少需要1个景点'),
    body('spots.*.spotId')
      .notEmpty()
      .trim()
      .withMessage('景点ID不能为空'),
    body('spots.*.order')
      .isInt({ min: 1 })
      .withMessage('景点排序必须为正整数'),
  ],
  async (req, res, next) => {
    try {
      const { name, spots } = req.body;

      // 验证所有spotId都存在
      const validation = await validateSpotsExist(spots);
      if (!validation.valid) {
        return error(
          res,
          'SPOT_NOT_FOUND',
          `以下景点不存在: ${validation.missing.join(', ')}`,
          400
        );
      }

      // 去重并按order排序
      const uniqueSpots = spots.sort((a, b) => a.order - b.order);

      const itinerary = await Itinerary.create({
        userId: req.user.userId,
        name,
        spots: uniqueSpots,
      });

      return success(res, itinerary.toObject(), 201);
    } catch (err) {
      next(err);
    }
  }
);

// ========== PUT /api/itineraries/:id ==========
// 更新行程（仅所有者）
router.put(
  '/:id',
  auth,
  [
    param('id').notEmpty().withMessage('行程ID不能为空'),
    body('name')
      .optional()
      .trim()
      .isLength({ min: 1, max: 50 })
      .withMessage('行程名称长度在1-50个字符之间'),
    body('spots')
      .optional()
      .isArray({ min: 1 })
      .withMessage('行程至少需要1个景点'),
    body('spots.*.spotId')
      .if(body('spots').exists())
      .notEmpty()
      .trim()
      .withMessage('景点ID不能为空'),
    body('spots.*.order')
      .if(body('spots').exists())
      .isInt({ min: 1 })
      .withMessage('景点排序必须为正整数'),
  ],
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const { name, spots } = req.body;

      const itinerary = await Itinerary.findById(id);

      if (!itinerary) {
        return error(res, 'NOT_FOUND', '行程不存在', 404);
      }

      // 只有行程所有者才能更新
      if (itinerary.userId.toString() !== req.user.userId) {
        return error(res, 'FORBIDDEN', '无权修改他人的行程', 403);
      }

      // 如果传入了spots则验证所有spotId都存在
      if (spots !== undefined) {
        const validation = await validateSpotsExist(spots);
        if (!validation.valid) {
          return error(
            res,
            'SPOT_NOT_FOUND',
            `以下景点不存在: ${validation.missing.join(', ')}`,
            400
          );
        }
      }

      const updateData = {};
      if (name !== undefined) updateData.name = name;
      if (spots !== undefined) {
        updateData.spots = spots.sort((a, b) => a.order - b.order);
      }

      const updated = await Itinerary.findByIdAndUpdate(
        id,
        { $set: updateData },
        { new: true, runValidators: true }
      ).lean();

      return success(res, updated);
    } catch (err) {
      next(err);
    }
  }
);

// ========== DELETE /api/itineraries/:id ==========
// 删除行程（仅所有者）
router.delete(
  '/:id',
  auth,
  [param('id').notEmpty().withMessage('行程ID不能为空')],
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const itinerary = await Itinerary.findById(id);

      if (!itinerary) {
        return error(res, 'NOT_FOUND', '行程不存在', 404);
      }

      // 只有行程所有者才能删除
      if (itinerary.userId.toString() !== req.user.userId) {
        return error(res, 'FORBIDDEN', '无权删除他人的行程', 403);
      }

      await Itinerary.findByIdAndDelete(id);

      return success(res, null);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
