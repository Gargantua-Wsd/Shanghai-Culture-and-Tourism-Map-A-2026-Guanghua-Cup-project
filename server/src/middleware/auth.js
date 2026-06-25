const jwt = require('jsonwebtoken');
const config = require('../config/env');
const { error } = require('../utils/response');

/**
 * 提取并验证 Bearer token，挂载到 req.user
 * @param {boolean} ignoreExpiry - true 时过期 token 也能通过
 */
function extractAndVerify(req, res, ignoreExpiry) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return error(res, 'UNAUTHORIZED', '请先登录', 401);
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return error(res, 'UNAUTHORIZED', '请先登录', 401);
  }

  try {
    const decoded = jwt.verify(token, config.jwtSecret);
    req.user = decoded;
    return null; // success
  } catch (err) {
    if (ignoreExpiry && err instanceof jwt.TokenExpiredError) {
      // 过期 token 仍然解码，用于刷新场景
      const decoded = jwt.decode(token);
      if (decoded && decoded.userId) {
        req.user = decoded;
        return null; // success
      }
    }
    return error(res, 'UNAUTHORIZED', '登录已过期，请重新登录', 401);
  }
}

/**
 * JWT 认证中间件 — token 必须有效（未过期）
 */
function auth(req, res, next) {
  const result = extractAndVerify(req, res, false);
  if (result) return; // error response already sent
  next();
}

/**
 * JWT 刷新认证中间件 — 允许过期 token 通过
 */
function refreshAuth(req, res, next) {
  const result = extractAndVerify(req, res, true);
  if (result) return;
  next();
}

/**
 * 可选认证中间件：如果提供了有效token就解析，否则继续（不拦截）
 */
function optionalAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.split(' ')[1];
      if (token) {
        try {
          const decoded = jwt.verify(token, config.jwtSecret);
          req.user = decoded;
        } catch (_err) {
          // token无效或过期也放行
        }
      }
    }
  } catch (_err) {
    // token无效也放行，由后续业务逻辑决定是否需要登录
  }
  next();
}

module.exports = { auth, optionalAuth, refreshAuth };
