const app = getApp()

Page({
  data: {
    history: [],
    isEmpty: true
  },

  onShow() {
    this.loadHistory()
  },

  onPullDownRefresh() {
    this.loadHistory()
    wx.stopPullDownRefresh()
  },

  loadHistory() {
    try {
      const raw = wx.getStorageSync('history') || []
      const list = [...raw].reverse()
      this.setData({ history: list, isEmpty: list.length === 0 })
    } catch (e) {
      this.setData({ history: [], isEmpty: true })
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

  removeOne(e) {
    const index = Number(e.currentTarget.dataset.index)
    try {
      let history = wx.getStorageSync('history') || []
      const list = [...history].reverse()
      list.splice(index, 1)
      wx.setStorageSync('history', list.reverse())
      this.loadHistory()
    } catch (err) {
      wx.showToast({ title: '操作失败', icon: 'none' })
    }
  },

  clearAll() {
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有浏览记录吗？',
      success: (res) => {
        if (res.confirm) {
          wx.setStorageSync('history', [])
          this.setData({ history: [], isEmpty: true })
          wx.showToast({ title: '已清空', icon: 'none' })
        }
      }
    })
  },

  goExplore() {
    wx.switchTab({ url: '/pages/map/map' })
  }
})
