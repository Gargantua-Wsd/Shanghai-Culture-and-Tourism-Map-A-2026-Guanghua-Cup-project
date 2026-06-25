const express = require('express');
const spotsRouter = require('./spots');
const authRouter = require('./auth');
const usersRouter = require('./users');
const reviewsRouter = require('./reviews');
const itinerariesRouter = require('./itineraries');

const router = express.Router();

// 公开路由
router.use('/spots', spotsRouter);
router.use('/auth', authRouter);

// 需要认证的路由（中间件在各自模块内部按需使用）
router.use('/users', usersRouter);

// 评论路由：部分公开，部分需认证
router.use(reviewsRouter);

// 行程路由：全部需要认证
router.use('/itineraries', itinerariesRouter);

module.exports = router;
