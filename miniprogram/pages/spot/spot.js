const { spotsData, TYPE_ICONS, TYPE_NAMES, DISTRICT_NAMES } = require('../../utils/constants')
const api = require('../../utils/api')
const auth = require('../../utils/auth')
const { getPhotos } = require('../../utils/photos')

Page({
  data: {
    spot: null,
    inItinerary: false,
    comments: [],
    avgRating: 5,
    avgRatingText: '5.0',
    myRating: 0,
    commentText: '',
    showAllComments: false,
    isLoggedIn: false,
    userInfo: null,
    isFavorited: false
  },

  onLoad(options) {
    const app = getApp()
    this.setData({
      isLoggedIn: app.globalData.isLoggedIn,
      userInfo: app.globalData.userInfo
    })
    this.loadSpot(options.id)
  },

  onShow() {
    const app = getApp()
    this.setData({
      isLoggedIn: app.globalData.isLoggedIn,
      userInfo: app.globalData.userInfo
    })
    if (this.data.spot) {
      this.checkItineraryStatus()
    }
  },

  loadSpot(spotId) {
    if (!spotId) {
      wx.showToast({ title: '景点未找到', icon: 'none' })
      return
    }

    api.get(`/spots/${spotId}`, {}, false)
      .then((serverSpot) => {
        if (serverSpot) {
          this.setSpotData(serverSpot)
        } else {
          this.fallbackToLocal(spotId)
        }
      })
      .catch(() => {
        this.fallbackToLocal(spotId)
      })
  },

  fallbackToLocal(spotId) {
    let spot = spotsData.find(s => s.id === spotId)
    if (!spot) {
      spot = getApp().globalData.currentSpot
    }
    if (!spot) {
      wx.showToast({ title: '景点未找到', icon: 'none' })
      return
    }
    this.setSpotData(spot)
  },

  setSpotData(spot) {
    const app = getApp()
    const spotId = spot.spotId || spot.id
    const enriched = {
      ...spot,
      id: spotId,
      typeIcon: app.globalData.typeIcons[spot.type] || '📍',
      typeName: app.globalData.typeNames[spot.type] || '',
      districtName: app.globalData.districtNames[spot.district] || '',
      photos: (spot.photos && spot.photos.length > 0) ? spot.photos : getPhotos(spotId),
      celebrity: spot.celebrity || { name: '', shortBio: '', fullBio: '' }
    }
    this.setData({ spot: enriched })
    this.loadComments()
    this.checkItineraryStatus()
    this.recordHistory(enriched)
    this.checkFavoriteStatus()
  },

  checkItineraryStatus() {
    const app = getApp()
    const it = app.globalData.itinerary || []
    if (this.data.spot && it.some(s => s.id === this.data.spot.id)) {
      this.setData({ inItinerary: true })
    } else {
      this.setData({ inItinerary: false })
    }
  },

  loadComments() {
    const spotId = this.data.spot.id

    api.get(`/spots/${spotId}/reviews`, { limit: 50 }, false)
      .then((reviews) => {
        if (reviews && Array.isArray(reviews)) {
          const formatted = reviews.map(r => ({
            ...r,
            id: r._id || r.id,
            userName: r.userName || r.userId || '匿名游客',
            timeStr: this.formatTime(r.createdAt || r.timestamp || Date.now()),
            rating: r.rating || 0,
            content: r.content || ''
          }))
          this.setData({ comments: formatted.reverse() })
          this.computeAvgRating(formatted)
        } else {
          this.setData({ comments: [] })
          this.computeAvgRating([])
        }
      })
      .catch(() => {
        try {
          const key = `comments_${spotId}`
          const raw = wx.getStorageSync(key)
          if (raw) {
            const comments = JSON.parse(raw)
            comments.forEach(c => {
              c.timeStr = this.formatTime(c.timestamp)
              c.id = c.timestamp
            })
            const formatted = comments.reverse()
            this.setData({ comments: formatted })
            this.computeAvgRating(formatted)
          } else {
            this.setData({ comments: [] })
            this.computeAvgRating([])
          }
        } catch (e) {
          this.setData({ comments: [] })
          this.computeAvgRating([])
        }
      })
  },

  computeAvgRating(comments) {
    if (!comments || comments.length === 0) {
      this.setData({ avgRating: 5, avgRatingText: '5.0' })
      return
    }
    const sum = comments.reduce((s, c) => s + (c.rating || 0), 0)
    const avg = sum / comments.length
    this.setData({
      avgRating: Math.round(avg),
      avgRatingText: avg.toFixed(1)
    })
  },

  // ==================== Rating ====================

  setRating(e) {
    this.setData({ myRating: e.currentTarget.dataset.rating })
  },

  onCommentInput(e) {
    this.setData({ commentText: e.detail.value })
  },

  // ==================== Submit Comment ====================

  submitComment() {
    if (!this.data.isLoggedIn) {
      wx.showToast({ title: '请先登录', icon: 'none' })
      return
    }

    const { myRating, commentText } = this.data
    if (myRating === 0) {
      wx.showToast({ title: '请先评分', icon: 'none' })
      return
    }
    if (!commentText.trim()) {
      wx.showToast({ title: '请输入评价内容', icon: 'none' })
      return
    }

    const apiData = {
      rating: myRating,
      content: commentText.trim()
    }

    const localComment = {
      id: Date.now().toString(),
      userName: this.data.userInfo ? (this.data.userInfo.nickname || '微信用户') : '微信用户',
      rating: myRating,
      content: commentText.trim(),
      createdAt: new Date().toISOString(),
      timeStr: this.formatTime(Date.now())
    }

    const commentStorage = {
      userName: localComment.userName,
      rating: localComment.rating,
      content: localComment.content,
      timestamp: Date.now()
    }

    // Always save locally first
    this.saveCommentLocally(commentStorage)

    // Then try server
    api.post(`/spots/${this.data.spot.id}/reviews`, apiData, true)
      .then(() => {
        wx.showToast({ title: '感谢评价！', icon: 'success' })
        this.setData({ myRating: 0, commentText: '' })
        this.loadComments()
      })
      .catch(() => {
        // Already saved locally, just update UI
        wx.showToast({ title: '评价已保存(本地)', icon: 'success' })
        const currentComments = this.data.comments
        currentComments.unshift(localComment)
        this.setData({ comments: currentComments, myRating: 0, commentText: '' })
        this.computeAvgRating(currentComments)
      })
  },

  // ==================== Comments Expand ====================

  showAllReviews() {
    this.setData({ showAllComments: true })
  },

  collapseReviews() {
    this.setData({ showAllComments: false })
  },

  // ==================== Baidu Baike ====================

  openBaike() {
    const spot = this.data.spot
    const url = spot.baikeUrl || ('https://baike.baidu.com/item/' + encodeURIComponent(spot.name))
    const title = spot.name.length > 10 ? spot.name.substring(0, 10) + '…' : spot.name
    wx.navigateTo({
      url: `/pages/webview/webview?title=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
    })
  },

  // ==================== Itinerary ====================

  async addToItinerary() {
    const app = getApp()
    const { spot, inItinerary } = this.data

    if (inItinerary) {
      wx.showToast({ title: '已在行程中', icon: 'none' })
      return
    }

    const addLocal = () => {
      app.globalData.itinerary = app.globalData.itinerary || []
      app.globalData.itinerary.push({
        id: spot.id,
        name: spot.name,
        typeIcon: spot.typeIcon,
        address: spot.address,
        lat: spot.lat,
        lng: spot.lng
      })
      this.setData({ inItinerary: true })
    }

    if (app.globalData.isLoggedIn) {
      try {
        const itineraries = await api.get('/itineraries', {}, true)
        const existingIt = (itineraries && itineraries.length > 0) ? itineraries[0] : null

        if (existingIt) {
          const currentSpots = existingIt.spots || []
          const maxOrder = currentSpots.reduce((max, s) => Math.max(max, s.order || 0), 0)
          const updatedSpots = [...currentSpots, { spotId: spot.id, order: maxOrder + 1 }]
          await api.put(`/itineraries/${existingIt._id}`, { spots: updatedSpots }, true)
        } else {
          await api.post('/itineraries', {
            name: '我的行程',
            spots: [{ spotId: spot.id, order: 1 }]
          }, true)
        }

        await app.loadItineraryFromServer()
        this.setData({ inItinerary: true })
        wx.showToast({ title: '已加入行程', icon: 'success' })
        return
      } catch (e) {
        // Fall through to local
      }
    }

    addLocal()
    wx.showToast({ title: '已加入行程(本地)', icon: 'success' })
  },

  // ==================== Navigation ====================

  goPerson() {
    const { spot } = this.data
    if (!spot || !spot.celebrity || !spot.celebrity.name) return
    getApp().globalData.currentPerson = spot.celebrity
    wx.navigateTo({ url: `/pages/person/person?spotName=${encodeURIComponent(spot.name)}` })
  },

  showLoginPrompt() {
    wx.showModal({
      title: '请先登录',
      content: '登录后可发表评论，是否前往登录？',
      success: (res) => {
        if (res.confirm) {
          wx.switchTab({ url: '/pages/my/my' })
        }
      }
    })
  },

  previewPhoto(e) {
    const url = e.currentTarget.dataset.url
    const urls = this.data.spot.photos || []
    wx.previewImage({
      current: url,
      urls
    })
  },

  // ==================== Favorites & History ====================

  toggleFavorite() {
    const spot = this.data.spot
    const spotId = spot.id
    try {
      let favorites = wx.getStorageSync('favorites') || {}
      if (favorites[spotId]) {
        delete favorites[spotId]
        wx.setStorageSync('favorites', favorites)
        this.setData({ isFavorited: false })
        wx.showToast({ title: '已取消收藏', icon: 'none' })
      } else {
        favorites[spotId] = {
          id: spotId,
          name: spot.name,
          typeIcon: spot.typeIcon || '📍',
          typeName: spot.typeName || '',
          districtName: spot.districtName || '',
          address: spot.address || '',
          lat: spot.lat,
          lng: spot.lng,
          addedAt: Date.now()
        }
        wx.setStorageSync('favorites', favorites)
        this.setData({ isFavorited: true })
        wx.showToast({ title: '已收藏', icon: 'success' })
      }
    } catch (e) {
      wx.showToast({ title: '操作失败', icon: 'none' })
    }
  },

  checkFavoriteStatus() {
    try {
      const favorites = wx.getStorageSync('favorites') || {}
      this.setData({ isFavorited: !!favorites[this.data.spot.id] })
    } catch (e) {
      this.setData({ isFavorited: false })
    }
  },

  recordHistory(spot) {
    try {
      let history = wx.getStorageSync('history') || []
      history = history.filter(h => h.id !== spot.id)
      history.push({
        id: spot.id,
        name: spot.name,
        typeIcon: spot.typeIcon || '📍',
        typeName: spot.typeName || '',
        districtName: spot.districtName || '',
        address: spot.address || '',
        lat: spot.lat,
        lng: spot.lng,
        viewedAt: Date.now(),
        timeStr: this.formatDateTime(Date.now())
      })
      if (history.length > 50) history = history.slice(-50)
      wx.setStorageSync('history', history)
    } catch (e) { /* silent */ }
  },

  saveCommentLocally(commentStorage) {
    try {
      const spotId = this.data.spot.id
      const key = `comments_${spotId}`
      let spotComments = []
      const raw = wx.getStorageSync(key)
      if (raw) spotComments = JSON.parse(raw)
      spotComments.push(commentStorage)
      wx.setStorageSync(key, JSON.stringify(spotComments))

      let myReviews = wx.getStorageSync('my_reviews') || []
      myReviews.unshift({
        spotId: spotId,
        spotName: this.data.spot.name,
        rating: commentStorage.rating,
        content: commentStorage.content,
        timestamp: commentStorage.timestamp
      })
      wx.setStorageSync('my_reviews', myReviews)
    } catch (e) { /* silent */ }
  },

  // ==================== Helpers ====================

  formatTime(ts) {
    if (!ts) return ''
    let d
    if (typeof ts === 'string') {
      d = new Date(ts)
    } else if (typeof ts === 'number') {
      d = new Date(ts)
    } else {
      return ts
    }
    if (isNaN(d.getTime())) return ts
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    return `${mm}-${dd}`
  },

  formatDateTime(ts) {
    if (!ts) return ''
    const d = new Date(ts)
    if (isNaN(d.getTime())) return ts
    const mm = String(d.getMonth() + 1).padStart(2, '0')
    const dd = String(d.getDate()).padStart(2, '0')
    const h = String(d.getHours()).padStart(2, '0')
    const min = String(d.getMinutes()).padStart(2, '0')
    return `${mm}-${dd} ${h}:${min}`
  },

  onShareAppMessage() {
    return {
      title: `沪上文旅地图 — ${this.data.spot ? this.data.spot.name : '景点'}`,
      path: `/pages/spot/spot?id=${this.data.spot ? this.data.spot.id : ''}`
    }
  }
})
