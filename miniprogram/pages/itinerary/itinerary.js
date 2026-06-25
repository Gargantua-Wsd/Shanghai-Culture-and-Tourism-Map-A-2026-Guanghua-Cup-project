const api = require('../../utils/api')
const app = getApp()

Page({
  data: {
    itinerary: [],
    isEmpty: true
  },

  onShow() {
    this.loadItinerary()
  },

  loadItinerary() {
    const itinerary = app.globalData.itinerary || []
    this.setData({
      itinerary,
      isEmpty: itinerary.length === 0
    })
  },

  goToSpot(e) {
    const spotId = e.currentTarget.dataset.id
    const spot = app.globalData.spots.find(s => s.id === spotId)
    if (spot) {
      app.globalData.currentSpot = spot
      wx.navigateTo({ url: `/pages/spot/spot?id=${spotId}` })
    }
  },

  goExplore() {
    wx.switchTab({ url: '/pages/map/map' })
  },

  // ==================== Reorder ====================

  moveUp(e) {
    const index = Number(e.currentTarget.dataset.index)
    if (index === 0) return
    this.swapSpots(index, index - 1)
  },

  moveDown(e) {
    const index = Number(e.currentTarget.dataset.index)
    if (index >= this.data.itinerary.length - 1) return
    this.swapSpots(index, index + 1)
  },

  swapSpots(from, to) {
    const itinerary = [...this.data.itinerary];
    [itinerary[from], itinerary[to]] = [itinerary[to], itinerary[from]]
    this.setData({ itinerary })
    app.globalData.itinerary = itinerary
    this.syncOrderToServer(itinerary)
  },

  async syncOrderToServer(itinerary) {
    if (!app.globalData.isLoggedIn) return
    const groups = {}
    itinerary.forEach((item, i) => {
      const itId = item.itineraryId || 'default'
      if (!groups[itId]) groups[itId] = []
      groups[itId].push({ spotId: item.id, order: i + 1 })
    })

    for (const [itId, spots] of Object.entries(groups)) {
      if (itId === 'default') continue
      try {
        await api.put(`/itineraries/${itId}`, { spots }, true)
      } catch (e) {
        wx.showToast({ title: '同步排序失败', icon: 'none' })
      }
    }
  },

  // ==================== Remove ====================

  async removeFromItinerary(e) {
    const spotId = e.currentTarget.dataset.id
    const itineraryId = e.currentTarget.dataset.itineraryId

    const previousItinerary = [...app.globalData.itinerary]
    app.globalData.itinerary = app.globalData.itinerary.filter(s => s.id !== spotId)
    this.loadItinerary()

    if (itineraryId && app.globalData.isLoggedIn) {
      try {
        const itineraries = await api.get('/itineraries', {}, true)
        const it = (itineraries || []).find(i => i._id === itineraryId)
        if (it && it.spots) {
          const updatedSpots = it.spots.filter(s => s.spotId !== spotId)
          if (updatedSpots.length > 0) {
            await api.put(`/itineraries/${itineraryId}`, { spots: updatedSpots }, true)
          } else {
            await api.del(`/itineraries/${itineraryId}`, true)
          }
        }
        await app.loadItineraryFromServer()
        this.loadItinerary()
      } catch (e) {
        app.globalData.itinerary = previousItinerary
        this.loadItinerary()
        wx.showToast({ title: '移除失败', icon: 'none' })
      }
    }
  },

  // ==================== Clear All ====================

  clearAll() {
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有行程吗？',
      success: async (res) => {
        if (res.confirm) {
          if (app.globalData.isLoggedIn) {
            const ids = [...new Set(
              app.globalData.itinerary.map(s => s.itineraryId).filter(Boolean)
            )]
            for (const id of ids) {
              try { await api.del(`/itineraries/${id}`, true) } catch (e) { /* continue */ }
            }
          }
          app.globalData.itinerary = []
          this.setData({ itinerary: [], isEmpty: true })
          wx.showToast({ title: '已清空', icon: 'none' })
        }
      }
    })
  },

  // ==================== Show Route on Map ====================

  showRouteOnMap() {
    if (this.data.itinerary.length < 2) {
      wx.showToast({ title: '至少需要2个景点才能显示路线', icon: 'none' })
      return
    }
    app.globalData._showRoute = true
    wx.switchTab({ url: '/pages/map/map' })
  }
})
