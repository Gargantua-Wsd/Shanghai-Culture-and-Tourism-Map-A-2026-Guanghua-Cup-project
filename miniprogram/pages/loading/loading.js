const auth = require('../../utils/auth')
const api = require('../../utils/api')

Page({
  data: {
    progress: 0,
    loadingText: '正在加载...'
  },

  onLoad() {
    this.startLoading()
  },

  startLoading() {
    // Animate progress bar
    let progress = 0
    const steps = [
      { p: 15, text: '正在加载...', delay: 200 },
      { p: 30, text: '获取位置信息...', delay: 400 },
      { p: 50, text: '登录中...', delay: 400 },
      { p: 70, text: '加载景点数据...', delay: 400 },
      { p: 85, text: '同步行程...', delay: 300 },
      { p: 100, text: '准备就绪', delay: 200 }
    ]

    const runStep = (i) => {
      if (i >= steps.length) {
        this.enterApp()
        return
      }
      const step = steps[i]
      progress = step.p
      this.setData({ progress, loadingText: step.text })
      setTimeout(() => runStep(i + 1), step.delay)
    }

    // Start progress animation AND app init in parallel
    runStep(0)
    this.initApp()
  },

  async initApp() {
    const app = getApp()

    // Step 1: Request location permission
    try {
      await new Promise((resolve, reject) => {
        wx.getLocation({
          type: 'gcj02',
          success: (res) => {
            app.globalData.userLocation = { lat: res.latitude, lng: res.longitude }
            resolve(res)
          },
          fail: (err) => {
            // Location denied, use default
            console.log('Location permission denied, using default')
            resolve(null)
          }
        })
      })
    } catch (e) {
      // Continue without location
    }

    // Step 2: Auto login
    const token = auth.getToken()
    if (token) {
      app.globalData.token = token
      app.globalData.isLoggedIn = true
      try {
        const profile = await auth.loadProfile()
        if (profile) {
          app.globalData.userInfo = profile
        }
      } catch (e) {
        // Profile fetch failed, try refresh
        try {
          const newToken = await auth.refreshToken()
          if (newToken) {
            app.globalData.token = newToken
            const profile = await auth.loadProfile()
            if (profile) app.globalData.userInfo = profile
          } else {
            auth.logout()
            app.globalData.token = null
            app.globalData.isLoggedIn = false
          }
        } catch (e2) {
          auth.logout()
          app.globalData.token = null
          app.globalData.isLoggedIn = false
        }
      }
    }

    // Step 3: Load spots from server
    try {
      const serverSpots = await api.get('/spots', { limit: 100 }, false)
      if (serverSpots && Array.isArray(serverSpots) && serverSpots.length > 0) {
        const enriched = serverSpots.map(s => ({
          ...s,
          id: s.spotId || s.id,
          typeIcon: app.globalData.typeIcons[s.type] || '📍',
          typeName: app.globalData.typeNames[s.type] || '',
          districtName: app.globalData.districtNames[s.district] || ''
        }))
        app.globalData.spots = enriched
        app.updateSpotsWithIcons()
      }
    } catch (e) {
      console.log('Using local spot data')
    }

    // Step 4: Load itinerary if logged in
    if (app.globalData.isLoggedIn) {
      try {
        await app.loadItineraryFromServer()
      } catch (e) {
        // Itinerary load failed
      }
    }

    // Mark loading complete
    this._initComplete = true
  },

  enterApp() {
    // Wait for init to complete (or timeout after 5s)
    const checkReady = (tries) => {
      if (this._initComplete || tries <= 0) {
        wx.switchTab({ url: '/pages/map/map' })
      } else {
        setTimeout(() => checkReady(tries - 1), 300)
      }
    }
    checkReady(10)
  }
})
