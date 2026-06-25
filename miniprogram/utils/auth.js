const api = require('./api')

const TOKEN_KEY = 'auth_token'

/**
 * Get stored token from Storage
 */
function getToken() {
  try {
    return wx.getStorageSync(TOKEN_KEY) || null
  } catch (e) {
    return null
  }
}

/**
 * Check if user is logged in (has a stored token)
 */
function isLoggedIn() {
  return !!getToken()
}

/**
 * wx.login then POST /api/auth/login to get JWT token
 * @returns {Promise<object|null>} {token, user} or null on failure
 */
function login() {
  return new Promise((resolve, reject) => {
    wx.login({
      success: (loginRes) => {
        if (!loginRes.code) {
          wx.showToast({ title: '获取微信登录凭证失败', icon: 'none' })
          reject(new Error('NO_CODE'))
          return
        }

        api.post('/auth/login', { code: loginRes.code }, false)
          .then((data) => {
            if (data && data.token) {
              // Store token
              try {
                wx.setStorageSync(TOKEN_KEY, data.token)
              } catch (e) {
                // Storage write failed
              }

              // Update globalData
              const app = getApp()
              app.globalData.token = data.token
              app.globalData.isLoggedIn = true

              // Load user profile
              if (data.user) {
                app.globalData.userInfo = data.user
                resolve(data)
              } else {
                // Fetch profile separately
                loadProfile().then((profile) => {
                  if (profile) {
                    app.globalData.userInfo = profile
                  }
                  resolve({ token: data.token, user: profile })
                }).catch(() => {
                  resolve({ token: data.token, user: data.user || null })
                })
              }
            } else {
              wx.showToast({ title: '登录失败，请稍后再试', icon: 'none' })
              reject(new Error('LOGIN_FAILED'))
            }
          })
          .catch((err) => {
            wx.showToast({ title: '登录失败，请检查网络', icon: 'none' })
            reject(err)
          })
      },
      fail: () => {
        wx.showToast({ title: '获取微信登录凭证失败', icon: 'none' })
        reject(new Error('WX_LOGIN_FAILED'))
      }
    })
  })
}

/**
 * Logout: clear token from Storage and globalData
 */
function logout() {
  try {
    wx.removeStorageSync(TOKEN_KEY)
  } catch (e) {
    // Ignore
  }
  const app = getApp()
  app.globalData.token = null
  app.globalData.isLoggedIn = false
  app.globalData.userInfo = null
}

let _refreshing = false

/**
 * Refresh token: POST /api/auth/refresh
 * @returns {Promise<string|null>} New token or null
 */
function refreshToken() {
  if (_refreshing) return Promise.resolve(null)
  _refreshing = true

  return api.post('/auth/refresh', {}, true)
    .then((data) => {
      _refreshing = false
      if (data && data.token) {
        try {
          wx.setStorageSync(TOKEN_KEY, data.token)
        } catch (e) { /* ignore */ }
        const app = getApp()
        app.globalData.token = data.token
        return data.token
      }
      return null
    })
    .catch(() => {
      _refreshing = false
      return null
    })
}

/**
 * Load user profile: GET /api/user/profile
 * @returns {Promise<object|null>} User profile or null
 */
function loadProfile() {
  return api.get('/users/profile', {}, true)
    .then((data) => {
      if (data) {
        const app = getApp()
        app.globalData.userInfo = data
        return data
      }
      return null
    })
    .catch(() => {
      return null
    })
}

/**
 * Update user profile: PUT /api/user/profile
 * @param {object} updates - {nickname, avatar}
 * @returns {Promise<object|null>}
 */
function updateProfile(updates) {
  return api.put('/users/profile', updates, true)
    .then((data) => {
      if (data) {
        const app = getApp()
        app.globalData.userInfo = { ...app.globalData.userInfo, ...updates }
      }
      return data
    })
}

module.exports = {
  getToken,
  isLoggedIn,
  login,
  logout,
  refreshToken,
  loadProfile,
  updateProfile
}
