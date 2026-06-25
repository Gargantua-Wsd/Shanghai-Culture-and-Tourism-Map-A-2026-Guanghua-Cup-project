const API_BASE = 'http://1.117.207.132/map/api'

/**
 * Core request function
 * @param {string} method - HTTP method: GET, POST, PUT, DELETE
 * @param {string} path - API path e.g. '/spots'
 * @param {object|null} data - Request body (for POST/PUT) or query params (for GET)
 * @param {boolean} needAuth - Whether to attach Authorization header
 * @returns {Promise<any>} Response data
 */
function request(method, path, data, needAuth) {
  return new Promise((resolve, reject) => {
    const header = {
      'Content-Type': 'application/json'
    }

    if (needAuth) {
      const auth = require('./auth')
      const token = auth.getToken()
      if (token) {
        header['Authorization'] = 'Bearer ' + token
      }
    }

    const doRequest = (withRetry) => {
      wx.request({
        url: API_BASE + path,
        method: method,
        data: data || {},
        header: header,
        timeout: 15000,
        success: (res) => {
          const statusCode = res.statusCode

          if (statusCode === 200 || statusCode === 201) {
            const body = res.data
            if (body && body.success !== false) {
              const result = body.data !== undefined ? body.data : body
              if (body.pagination) {
                result._pagination = body.pagination
              }
              resolve(result)
            } else {
              // Server returned success:false
              const msg = (body && body.error && body.error.message) || '服务繁忙，请稍后再试'
              wx.showToast({ title: msg, icon: 'none' })
              reject(new Error(msg))
            }
          } else if (statusCode === 401) {
            // Token expired, try refresh and retry once
            if (withRetry && needAuth) {
              const auth = require('./auth')
              auth.refreshToken().then((newToken) => {
                if (newToken) {
                  header['Authorization'] = 'Bearer ' + newToken
                  doRequest(false)
                } else {
                  // Refresh failed, need re-login
                  wx.showToast({ title: '登录已过期，请重新登录', icon: 'none' })
                  reject(new Error('UNAUTHORIZED'))
                }
              }).catch(() => {
                wx.showToast({ title: '登录已过期，请重新登录', icon: 'none' })
                reject(new Error('UNAUTHORIZED'))
              })
            } else {
              wx.showToast({ title: '登录已过期，请重新登录', icon: 'none' })
              reject(new Error('UNAUTHORIZED'))
            }
          } else if (statusCode === 404) {
            resolve(null)
          } else {
            const msg = (res.data && res.data.error && res.data.error.message) || '服务繁忙，请稍后再试'
            wx.showToast({ title: msg, icon: 'none' })
            reject(new Error(msg))
          }
        },
        fail: (err) => {
          console.error('API request failed:', err)
          wx.showToast({ title: '网络异常，请检查网络', icon: 'none' })
          reject(err)
        }
      })
    }

    doRequest(true)
  })
}

/**
 * GET request
 * @param {string} path - API path
 * @param {object} params - Query parameters
 * @param {boolean} needAuth - Need auth header
 */
function get(path, params, needAuth) {
  let queryString = ''
  if (params) {
    const parts = []
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null && params[key] !== '') {
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
      }
    })
    if (parts.length > 0) {
      queryString = '?' + parts.join('&')
    }
  }
  return request('GET', path + queryString, null, needAuth)
}

/**
 * POST request
 * @param {string} path - API path
 * @param {object} data - Request body
 * @param {boolean} needAuth - Need auth header
 */
function post(path, data, needAuth) {
  return request('POST', path, data, needAuth)
}

/**
 * PUT request
 * @param {string} path - API path
 * @param {object} data - Request body
 * @param {boolean} needAuth - Need auth header
 */
function put(path, data, needAuth) {
  return request('PUT', path, data, needAuth)
}

/**
 * DELETE request
 * @param {string} path - API path
 * @param {boolean} needAuth - Need auth header
 */
function del(path, needAuth) {
  return request('DELETE', path, null, needAuth)
}

module.exports = {
  API_BASE,
  get,
  post,
  put,
  del,
  request
}
