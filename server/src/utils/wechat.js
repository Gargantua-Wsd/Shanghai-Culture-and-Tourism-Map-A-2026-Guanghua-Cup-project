const axios = require('axios');
const config = require('../config/env');

/**
 * 微信 code2session 接口
 * 用 wx.login 获取的临时 code 换取用户的 openid
 *
 * 开发模式 (DEV MODE):
 * 当 WECHAT_APPID 为 "test" 或未设置时，返回模拟的 openid，
 * 格式为 "mock_openid_" + code 的前8位。
 *
 * @param {string} code - wx.login() 返回的临时凭证
 * @returns {Promise<{openid: string, session_key?: string, unionid?: string}>}
 */
async function code2session(code) {
  if (!code || typeof code !== 'string') {
    const err = new Error('code参数不能为空');
    err.code = 'INVALID_PARAMS';
    err.statusCode = 400;
    throw err;
  }

  // DEV MODE: 当 AppID 为 "test" 或未设置时，返回模拟数据
  if (config.wechatAppId === 'test' || !config.wechatAppId) {
    console.log(`[DEV MODE] 模拟微信登录, code: ${code}`);
    const mockOpenid = `mock_openid_${code.substring(0, 8)}`;
    return {
      openid: mockOpenid,
      session_key: 'mock_session_key',
    };
  }

  // 生产模式：调用微信真实接口
  try {
    const url = 'https://api.weixin.qq.com/sns/jscode2session';
    const response = await axios.get(url, {
      params: {
        appid: config.wechatAppId,
        secret: config.wechatAppSecret,
        js_code: code,
        grant_type: 'authorization_code',
      },
      timeout: 5000,
    });

    const { errcode, errmsg, openid, session_key, unionid } = response.data;

    if (errcode && errcode !== 0) {
      const err = new Error(`微信接口错误: ${errmsg} (errcode: ${errcode})`);
      err.code = 'WECHAT_API_ERROR';
      err.statusCode = 502;
      throw err;
    }

    if (!openid) {
      const err = new Error('微信接口未返回openid');
      err.code = 'WECHAT_API_ERROR';
      err.statusCode = 502;
      throw err;
    }

    return { openid, session_key, unionid };
  } catch (err) {
    // axios网络错误等
    if (err.code && err.statusCode) {
      throw err; // 已经是格式化的业务错误，直接抛出
    }
    const wrappedErr = new Error(`微信接口调用失败: ${err.message}`);
    wrappedErr.code = 'WECHAT_API_ERROR';
    wrappedErr.statusCode = 502;
    throw wrappedErr;
  }
}

module.exports = { code2session };
