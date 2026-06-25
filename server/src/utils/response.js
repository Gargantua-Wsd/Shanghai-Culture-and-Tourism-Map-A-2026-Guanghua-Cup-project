/**
 * 统一成功响应
 * @param {Response} res - Express response
 * @param {*} data - 响应数据
 * @param {number} statusCode - HTTP 状态码，默认 200
 */
function success(res, data = null, statusCode = 200) {
  return res.status(statusCode).json({
    success: true,
    data,
  });
}

/**
 * 统一错误响应
 * @param {Response} res - Express response
 * @param {string} code - 错误码
 * @param {string} message - 错误消息
 * @param {number} statusCode - HTTP 状态码，默认 400
 */
function error(res, code = 'ERROR', message = '操作失败', statusCode = 400) {
  return res.status(statusCode).json({
    success: false,
    error: {
      code,
      message,
    },
  });
}

/**
 * 统一分页响应
 * @param {Response} res - Express response
 * @param {Array} data - 数据列表
 * @param {number} page - 当前页码
 * @param {number} limit - 每页条数
 * @param {number} total - 总记录数
 */
function paginated(res, data = [], page = 1, limit = 20, total = 0) {
  return res.status(200).json({
    success: true,
    data,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit) || 0,
    },
  });
}

module.exports = { success, error, paginated };
