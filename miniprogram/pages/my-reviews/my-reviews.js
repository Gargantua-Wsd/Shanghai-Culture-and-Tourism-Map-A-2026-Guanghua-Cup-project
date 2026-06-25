const app = getApp()

Page({
  data: {
    reviews: [],
    isEmpty: true
  },

  onShow() {
    this.loadReviews()
  },

  onPullDownRefresh() {
    this.loadReviews()
    wx.stopPullDownRefresh()
  },

  loadReviews() {
    try {
      const raw = wx.getStorageSync('my_reviews') || []
      const formatted = raw.map(r => ({
        ...r,
        timeStr: this.formatTime(r.timestamp),
        id: r.timestamp ? r.timestamp.toString() : ''
      }))
      this.setData({ reviews: formatted, isEmpty: formatted.length === 0 })
    } catch (e) {
      this.setData({ reviews: [], isEmpty: true })
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

  deleteReview(e) {
    const index = e.currentTarget.dataset.index
    const review = this.data.reviews[index]
    if (!review) return

    wx.showModal({
      title: '删除评论',
      content: '确定删除这条评论吗？',
      success: (res) => {
        if (res.confirm) {
          try {
            // Remove from my_reviews
            let myReviews = wx.getStorageSync('my_reviews') || []
            myReviews = myReviews.filter(r => r.timestamp !== review.timestamp)
            wx.setStorageSync('my_reviews', myReviews)

            // Also remove from per-spot comments
            const key = `comments_${review.spotId}`
            let spotComments = []
            const raw = wx.getStorageSync(key)
            if (raw) spotComments = JSON.parse(raw)
            spotComments = spotComments.filter(c => c.timestamp !== review.timestamp)
            wx.setStorageSync(key, JSON.stringify(spotComments))

            this.loadReviews()
            wx.showToast({ title: '已删除', icon: 'none' })
          } catch (err) {
            wx.showToast({ title: '删除失败', icon: 'none' })
          }
        }
      }
    })
  },

  goWriteReview() {
    wx.switchTab({ url: '/pages/map/map' })
  },

  formatTime(ts) {
    if (!ts) return ''
    let d = new Date(ts)
    if (isNaN(d.getTime())) return ''
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    const h = String(d.getHours()).padStart(2, '0')
    const min = String(d.getMinutes()).padStart(2, '0')
    return `${m}-${day} ${h}:${min}`
  }
})
