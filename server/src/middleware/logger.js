/**
 * 请求日志中间件
 * 记录每个请求的：时间戳、方法、URL、状态码、响应时间
 */
function logger(req, res, next) {
  const start = Date.now();
  const { method, originalUrl } = req;

  // 监听响应完成事件
  res.on('finish', () => {
    const duration = Date.now() - start;
    const { statusCode } = res;
    const timestamp = new Date().toISOString();

    const logLine = `[${timestamp}] ${method} ${originalUrl} ${statusCode} ${duration}ms`;
    console.log(logLine);
  });

  next();
}

module.exports = logger;
