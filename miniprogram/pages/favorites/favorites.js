const app = getApp()

Page({
  data: {
    favorites: [],
    isEmpty: true
  },

  onShow() {
    this.loadFavorites()
  },

  onPullDownRefresh() {
    this.loadFavorites()
    wx.stopPullDownRefresh()
  },

  loadFavorites() {
    try {
      const raw = wx.getStorageSync('favorites') || {}
      const list = Object.values(raw).sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0))
      this.setData({ favorites: list, isEmpty: list.length === 0 })
    } catch (e) {
      this.setData({ favorites: [], isEmpty: true })
    }
  },

  goToSpot(e) {
    const spotId = e.currentTarget.dataset.id
    const spot = app.globalData.spots.find(s => s.id === spotId)
    if (spot) {
      app.globalData.currentSpot = spot
      wx.navigateTo({ url: `/pages/spot/spot?id=${spotId}` })
    }
  },

  removeFavorite(e) {
    const spotId = e.currentTarget.dataset.id
    try {
      const favorites = wx.getStorageSync('favorites') || {}
      delete favorites[spotId]
      wx.setStorageSync('favorites', favorites)
      this.loadFavorites()
      wx.showToast({ title: '已取消收藏', icon: 'none' })
    } catch (err) {
      wx.showToast({ title: '操作失败', icon: 'none' })
    }
  },

  clearAll() {
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有收藏吗？',
      success: (res) => {
        if (res.confirm) {
          wx.setStorageSync('favorites', {})
          this.setData({ favorites: [], isEmpty: true })
          wx.showToast({ title: '已清空', icon: 'none' })
        }
      }
    })
  },

  goExplore() {
    wx.switchTab({ url: '/pages/map/map' })
  }
})
