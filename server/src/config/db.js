const mongoose = require('mongoose');
const config = require('./env');

async function connectDB(retries = 3, delayMs = 2000) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await mongoose.connect(config.mongodbUri, {
        // Mongoose 7+ 默认使用新的连接选项，无需额外配置
      });
      console.log(`[MongoDB] 连接成功 -> ${config.mongodbUri}`);
      return;
    } catch (err) {
      console.error(`[MongoDB] 连接失败 (尝试 ${attempt}/${retries}): ${err.message}`);
      if (attempt === retries) {
        console.error('[MongoDB] 重试次数已用完，进程退出');
        process.exit(1);
      }
      console.log(`[MongoDB] ${delayMs / 1000}秒后重试...`);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }
}

// 监听连接事件
mongoose.connection.on('disconnected', () => {
  console.warn('[MongoDB] 连接断开');
});

mongoose.connection.on('error', (err) => {
  console.error(`[MongoDB] 连接错误: ${err.message}`);
});

module.exports = { connectDB };
