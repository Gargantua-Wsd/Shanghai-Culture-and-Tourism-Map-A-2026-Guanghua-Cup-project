const jwt = require('jsonwebtoken');
const config = require('../config/env');

/**
 * 签发 JWT Token
 * @param {Object} user - 用户对象，需包含 _id, openid, role
 * @returns {string} JWT token
 */
function signToken(user) {
  const payload = {
    userId: user._id.toString(),
    openid: user.openid,
    role: user.role || 'user',
  };

  return jwt.sign(payload, config.jwtSecret, {
    expiresIn: '7d',
  });
}

/**
 * 验证 JWT Token
 * @param {string} token
 * @returns {Object} 解码后的 payload
 * @throws {JsonWebTokenError|TokenExpiredError} token无效或过期时抛出
 */
function verifyToken(token) {
  return jwt.verify(token, config.jwtSecret);
}

module.exports = { signToken, verifyToken };
