const dotenv = require('dotenv');
const path = require('path');

// 加载 .env 文件
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

function loadConfig() {
  const nodeEnv = process.env.NODE_ENV || 'development';

  const config = {
    port: parseInt(process.env.PORT, 10) || 3000,
    mongodbUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/shanghai_tourism',
    jwtSecret: process.env.JWT_SECRET || 'dev_jwt_secret_change_in_production',
    wechatAppId: process.env.WECHAT_APPID || 'test',
    wechatAppSecret: process.env.WECHAT_APPSECRET || 'test',
    nodeEnv,
    isDev: nodeEnv === 'development',
    isTest: nodeEnv === 'test',
    isProd: nodeEnv === 'production',
  };

  // 生产环境校验必需的环境变量
  if (config.isProd) {
    const required = ['MONGODB_URI', 'JWT_SECRET', 'WECHAT_APPID', 'WECHAT_APPSECRET'];
    const missing = required.filter((key) => !process.env[key] || process.env[key] === 'test');

    if (missing.length > 0) {
      console.error(`[Config Error] 生产环境缺少必需的环境变量: ${missing.join(', ')}`);
      console.error('请检查 .env 文件或系统环境变量配置');
      process.exit(1);
    }
  }

  return config;
}

const config = loadConfig();

module.exports = config;
