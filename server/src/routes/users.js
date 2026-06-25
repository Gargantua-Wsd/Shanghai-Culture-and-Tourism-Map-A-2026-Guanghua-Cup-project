const express = require('express');
const { body } = require('express-validator');
const User = require('../models/User');
const { success, error } = require('../utils/response');
const { auth } = require('../middleware/auth');

const router = express.Router();

/**
 * GET /api/users/profile
 * 获取当前用户信息（需要登录）
 */
router.get('/profile', auth, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId).select('-__v').lean();

    if (!user) {
      return error(res, 'UNAUTHORIZED', '用户不存在', 401);
    }

    return success(res, user);
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/users/profile
 * 更新用户信息（需要登录）
 */
router.put(
  '/profile',
  auth,
  [
    body('nickname')
      .optional()
      .trim()
      .isLength({ min: 1, max: 30 })
      .withMessage('昵称长度在1-30个字符之间'),
    body('avatar')
      .optional()
      .trim()
      .isString()
      .withMessage('头像地址无效'),
    body('gender')
      .optional()
      .trim()
      .isIn(['保密', '男', '女'])
      .withMessage('性别值无效'),
    body('birthday')
      .optional()
      .trim()
      .isString()
      .withMessage('生日格式无效'),
    body('region')
      .optional()
      .trim()
      .isLength({ max: 50 })
      .withMessage('地区长度不能超过50个字符'),
    body('bio')
      .optional()
      .trim()
      .isLength({ max: 100 })
      .withMessage('个性签名长度不能超过100个字符'),
  ],
  async (req, res, next) => {
    try {
      const { nickname, avatar, gender, birthday, region, bio } = req.body;

      const updatableFields = { nickname, avatar, gender, birthday, region, bio };
      const updateData = {};
      for (const [key, value] of Object.entries(updatableFields)) {
        if (value !== undefined && value !== null) {
          updateData[key] = value;
        }
      }

      if (Object.keys(updateData).length === 0) {
        return error(res, 'INVALID_PARAMS', '请提供需要更新的字段', 400);
      }

      const user = await User.findByIdAndUpdate(
        req.user.userId,
        { $set: updateData },
        { new: true, runValidators: true }
      )
        .select('-__v')
        .lean();

      if (!user) {
        return error(res, 'UNAUTHORIZED', '用户不存在', 401);
      }

      return success(res, user);
    } catch (err) {
      next(err);
    }
  }
);

module.exports = router;
