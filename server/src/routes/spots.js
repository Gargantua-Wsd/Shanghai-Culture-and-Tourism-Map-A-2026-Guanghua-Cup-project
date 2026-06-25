const express = require('express');
const { query, param } = require('express-validator');
const Spot = require('../models/Spot');
const { success, error, paginated } = require('../utils/response');

const router = express.Router();

/**
 * GET /api/spots
 * 获取景点列表（分页、筛选、搜索、排序）
 */
router.get(
  '/',
  [
    query('district').optional().isIn(['huangpu', 'jingan', 'hongkou', 'xuhui', 'changning', 'putuo', 'yangpu', 'pudong', 'songjiang', 'jiading', 'baoshan', 'minhang', 'qingpu', 'fengxian', 'jinshan', 'chongming']).withMessage('无效的区域参数'),
    query('type')
      .optional()
      .isIn([
        'historic', 'garden', 'religious', 'museum', 'park',
        'memorial', 'architecture', 'culture', 'art', 'modern',
        'street', 'view', 'hotel', 'shopping', 'bridge',
      ])
      .withMessage('无效的类型参数'),
    query('keyword').optional().trim().isString(),
    query('page').optional().isInt({ min: 1 }).toInt().withMessage('页码必须为正整数'),
    query('limit').optional().isInt({ min: 1, max: 100 }).toInt().withMessage('每页条数必须在1-100之间'),
    query('sortBy')
      .optional()
      .isIn(['createdAt', 'name', 'reviewCount', 'avgRating', 'district'])
      .withMessage('无效的排序字段'),
  ],
  async (req, res, next) => {
    try {
      const { district, type, keyword, sortBy = 'createdAt' } = req.query;
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 20;

      // 构建查询条件，默认只返回在线景点
      const filter = { status: 'online' };

      if (district) {
        filter.district = district;
      }

      if (type) {
        filter.type = type;
      }

      if (keyword) {
        const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        filter.name = { $regex: escapedKeyword, $options: 'i' };
      }

      // 排序映射
      const sortMap = {
        createdAt: { createdAt: -1 },
        name: { name: 1 },
        reviewCount: { reviewCount: -1 },
        avgRating: { avgRating: -1 },
        district: { district: 1, name: 1 },
      };
      const sort = sortMap[sortBy] || { createdAt: -1 };

      const [spots, total] = await Promise.all([
        Spot.find(filter)
          .sort(sort)
          .skip((page - 1) * limit)
          .limit(limit)
          .lean(),
        Spot.countDocuments(filter),
      ]);

      return paginated(res, spots, page, limit, total);
    } catch (err) {
      next(err);
    }
  }
);

/**
 * GET /api/spots/:spotId
 * 获取单个景点详情
 */
router.get(
  '/:spotId',
  [param('spotId').notEmpty().trim().isString().withMessage('无效的景点ID')],
  async (req, res, next) => {
    try {
      const { spotId } = req.params;

      const spot = await Spot.findOne({ spotId, status: 'online' }).lean();

      if (!spot) {
        return error(res, 'SPOT_NOT_FOUND', '景点不存在', 404);
      }

      return success(res, spot);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
