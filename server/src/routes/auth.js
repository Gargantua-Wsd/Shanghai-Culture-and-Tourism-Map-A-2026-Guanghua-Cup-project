const express = require('express');
const { body } = require('express-validator');
const User = require('../models/User');
const { signToken } = require('../utils/jwt');
const { success, error } = require('../utils/response');
const { code2session } = require('../utils/wechat');
const { auth, refreshAuth } = require('../middleware/auth');

const router = express.Router();

/**
 * POST /api/auth/login
 * 微信登录：code换取openid，查找/创建用户，签发JWT
 */
router.post(
  '/login',
  [body('code').notEmpty().withMessage('登录凭证code不能为空').trim()],
  async (req, res, next) => {
    try {
      const { code } = req.body;

      // 1. 调用微信接口获取 openid（开发模式自动返回模拟数据）
      let openid;
      try {
        const result = await code2session(code);
        openid = result.openid;
      } catch (err) {
        return error(res, err.code || 'WECHAT_API_ERROR', err.message, err.statusCode || 502);
      }

      // 2. 查找或创建用户
      let user = await User.findOne({ openid });

      if (!user) {
        user = await User.create({
          openid,
          nickname: '微信用户',
          avatar: '',
          role: 'user',
          lastLoginAt: new Date(),
        });
        console.log(`[Auth] 新用户注册: ${openid}`);
      } else {
        // 更新最后登录时间
        user.lastLoginAt = new Date();
        await user.save();
      }

      // 3. 签发 JWT
      const token = signToken(user);

      return success(res, {
        token,
        user: {
          _id: user._id.toString(),
          nickname: user.nickname,
          avatar: user.avatar,
          role: user.role,
        },
      });
    } catch (err) {
      next(err);
    }
  }
);

/**
 * POST /api/auth/refresh
 * 刷新Token（需要登录）
 */
router.post('/refresh', refreshAuth, async (req, res, next) => {
  try {
    const user = await User.findById(req.user.userId);

    if (!user) {
      return error(res, 'UNAUTHORIZED', '用户不存在', 401);
    }

    const token = signToken(user);

    return success(res, { token });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
