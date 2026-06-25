const { error } = require('../utils/response');

/**
 * 全局错误处理中间件
 */
function errorHandler(err, req, res, _next) {
  console.error(`[Error] ${req.method} ${req.originalUrl}:`, err.message);

  // Mongoose ValidationError
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((e) => e.message);
    return error(res, 'INVALID_PARAMS', messages.join('; '), 400);
  }

  // Mongoose CastError (无效的ObjectId等)
  if (err.name === 'CastError') {
    return error(res, 'INVALID_PARAMS', '参数格式错误', 400);
  }

  // Mongoose 11000 Duplicate Key Error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0] || '字段';
    return error(res, 'DUPLICATE_KEY', `${field} 已存在`, 409);
  }

  // JWT errors
  if (err.name === 'JsonWebTokenError') {
    return error(res, 'UNAUTHORIZED', 'Token无效', 401);
  }
  if (err.name === 'TokenExpiredError') {
    return error(res, 'UNAUTHORIZED', '登录已过期，请重新登录', 401);
  }
  if (err.name === 'NotBeforeError') {
    return error(res, 'UNAUTHORIZED', 'Token尚未生效', 401);
  }

  // 自定义业务错误（带有 statusCode 属性）
  if (err.statusCode) {
    return error(res, err.code || 'ERROR', err.message, err.statusCode);
  }

  // 默认500
  return error(res, 'INTERNAL_ERROR', '服务器内部错误', 500);
}

module.exports = errorHandler;
