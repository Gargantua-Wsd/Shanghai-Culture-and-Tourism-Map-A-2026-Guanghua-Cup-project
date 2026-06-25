const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const config = require('./config/env');
const { connectDB } = require('./config/db');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const routes = require('./routes');

// ---------- 全局异常捕获 ----------
process.on('unhandledRejection', (reason) => {
  console.error('[UnhandledRejection]', reason);
});
process.on('uncaughtException', (err) => {
  console.error('[UncaughtException]', err);
  process.exit(1);
});

const app = express();

// ---------- 基础中间件 ----------

// CORS（开发阶段允许所有来源）
app.use(
  cors({
    origin: config.isDev ? '*' : ['https://your-miniapp-domain.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  })
);

// 请求体解析
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// 请求日志
app.use(logger);

// 全局限流
app.use(
  rateLimit({
    windowMs: 60 * 1000, // 1分钟
    max: 200,
    standardHeaders: true,
    legacyHeaders: false,
    message: {
      success: false,
      error: { code: 'RATE_LIMITED', message: '请求过于频繁，请稍后再试' },
    },
  })
);

// ---------- 路由 ----------

// 健康检查
app.get('/api/health', (_req, res) => {
  res.json({
    success: true,
    data: {
      status: 'ok',
      timestamp: new Date().toISOString(),
      env: config.nodeEnv,
      uptime: process.uptime(),
    },
  });
});

// API 路由
app.use('/api', routes);

// 404 处理
app.use((_req, res) => {
  res.status(404).json({
    success: false,
    error: { code: 'NOT_FOUND', message: '接口不存在' },
  });
});

// 全局错误处理
app.use(errorHandler);

// ---------- 启动服务 ----------
async function start() {
  try {
    // 连接数据库
    await connectDB();

    // 启动监听
    app.listen(config.port, () => {
      console.log(`\n========================================`);
      console.log(`  沪上文创体验地图 - 后端服务`);
      console.log(`  环境: ${config.nodeEnv}`);
      console.log(`  端口: ${config.port}`);
      console.log(`  地址: http://localhost:${config.port}`);
      console.log(`  健康检查: http://localhost:${config.port}/api/health`);
      if (config.isDev && config.wechatAppId === 'test') {
        console.log(`  微信登录: 开发模拟模式（无需真实AppID）`);
      }
      console.log(`========================================\n`);
    });
  } catch (err) {
    console.error('[Server] 启动失败:', err.message);
    process.exit(1);
  }
}

start();
