const { spotsData, TYPE_ICONS, TYPE_NAMES, DISTRICT_NAMES } = require('../../utils/constants')
const api = require('../../utils/api')

Page({
  data: {
    mapCenter: { lat: 31.24, lng: 121.475 },
    mapScale: 12,
    searchText: '',
    searchFocus: false,
    searchResults: [],
    showFilter: false,
    showLegend: false,
    showItinerary: false,
    hasFilter: false,
    itinerary: [],
    itineraryCount: 0,
    activeMarkers: [],
    activeSpots: [],
    polylines: [],
    districts: ['huangpu', 'jingan', 'hongkou', 'xuhui', 'changning', 'putuo', 'yangpu', 'pudong', 'songjiang', 'jiading', 'baoshan', 'minhang', 'qingpu', 'fengxian', 'jinshan', 'chongming'],
    districtNames: DISTRICT_NAMES,
    selectedDistricts: {},
    types: [],
    typeIcons: TYPE_ICONS,
    typeNames: TYPE_NAMES,
    selectedTypes: {},
    legendTypes: [],
    allSpots: [],
    // Login state
    isLoggedIn: false,
    userInfo: null,
    // Layout
    searchBarTop: 80,
    dropdownTop: 140
  },

  onLoad() {
    this.computeLayout()
    const app = getApp()

    // Initialize login state from globalData
    this.setData({
      isLoggedIn: app.globalData.isLoggedIn,
      userInfo: app.globalData.userInfo
    })

    // Load spots from backend (with local fallback)
    this.loadSpots()

    // Load itinerary if logged in
    if (app.globalData.isLoggedIn) {
      this.loadServerItinerary()
    }
  },

  computeLayout() {
    try {
      const capsule = wx.getMenuButtonBoundingClientRect()
      const searchBarTop = capsule.bottom + 12
      const dropdownTop = searchBarTop + 48
      this.setData({ searchBarTop, dropdownTop })
    } catch (e) {
      // Fallback to CSS defaults
    }
  },

  onShow() {
    const app = getApp()
    this.setData({
      isLoggedIn: app.globalData.isLoggedIn,
      userInfo: app.globalData.userInfo,
      itinerary: app.globalData.itinerary,
      itineraryCount: app.globalData.itinerary.length
    })
    this.buildMarkers()

    // Auto-open itinerary panel when coming from "我的" page
    if (app.globalData._openItinerary) {
      app.globalData._openItinerary = false
      this.setData({ showItinerary: true })
    }

    // Auto-show route when coming from itinerary page
    if (app.globalData._showRoute) {
      app.globalData._showRoute = false
      this.showRoute()
    }
  },

  /**
   * Load spots from server API, fall back to local data if network fails
   */
  loadSpots() {
    const app = getApp()
    const localSpots = app.globalData.spots

    api.get('/spots', { limit: 200 }, false)
      .then((serverSpots) => {
        if (serverSpots && Array.isArray(serverSpots) && serverSpots.length > 0) {
          const enriched = serverSpots.map(s => ({
            ...s,
            id: s.spotId || s.id,
            typeIcon: TYPE_ICONS[s.type] || '📍',
            typeName: TYPE_NAMES[s.type] || '',
            districtName: DISTRICT_NAMES[s.district] || ''
          }))
          if (enriched.length >= localSpots.length) {
            this.initWithSpots(enriched)
          } else {
            // Server has fewer spots than local, merge with local as base
            const merged = localSpots.map(local => {
              const server = enriched.find(s => s.id === local.id)
              return server ? { ...local, reviewCount: server.reviewCount || 0, avgRating: server.avgRating || 0 } : local
            })
            this.initWithSpots(merged)
          }
        } else {
          throw new Error('Empty response')
        }
      })
      .catch(() => {
        console.log('Server unreachable, using local spot data')
        this.initWithSpots(localSpots)
      })
  },

  /**
   * Initialize page state with spots data
   */
  initWithSpots(spots) {
    const app = getApp()
    app.globalData.spots = spots
    app.updateSpotsWithIcons()

    const allTypes = [...new Set(spots.map(s => s.type))]
    const allDistricts = [...new Set(spots.map(s => s.district))]

    const selectedTypes = {}
    allTypes.forEach(t => { selectedTypes[t] = true })
    const selectedDistricts = {}
    allDistricts.forEach(d => { selectedDistricts[d] = true })

    this.setData({
      districts: allDistricts,
      selectedDistricts,
      allSpots: spots,
      types: allTypes,
      selectedTypes,
      legendTypes: allTypes.map(t => ({
        type: t,
        icon: TYPE_ICONS[t] || '📍',
        name: TYPE_NAMES[t] || t,
        visible: true
      }))
    })

    this.buildMarkers()
    this.getLocation()
  },

  /**
   * Load itinerary from server
   */
  async loadServerItinerary() {
    try {
      const app = getApp()
      await app.loadItineraryFromServer()
      this.setData({
        itinerary: app.globalData.itinerary,
        itineraryCount: app.globalData.itinerary.length
      })
    } catch (e) {
      const app = getApp()
      this.setData({
        itinerary: app.globalData.itinerary || [],
        itineraryCount: (app.globalData.itinerary || []).length
      })
    }
  },

  getLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.setData({
          mapCenter: { lat: res.latitude, lng: res.longitude },
          mapScale: 14
        })
      },
      fail: () => {
        console.log('定位失败，使用默认中心')
      }
    })
  },

  buildMarkers() {
    const { allSpots, selectedDistricts, selectedTypes, legendTypes } = this.data
    const visibleLegendTypes = legendTypes.filter(t => t.visible).map(t => t.type)

    const filtered = allSpots.filter(s =>
      selectedDistricts[s.district] &&
      selectedTypes[s.type] &&
      visibleLegendTypes.includes(s.type)
    )

    const markers = filtered.map((s, i) => ({
      id: i,
      spotId: s.id,
      latitude: s.lat,
      longitude: s.lng,
      iconPath: '/images/marker.png',
      width: 24,
      height: 24,
      callout: {
        content: `${s.typeIcon} ${s.name}`,
        color: '#4a3512',
        fontSize: 13,
        borderRadius: 14,
        bgColor: '#fefaf0',
        padding: 8,
        display: 'ALWAYS',
        textAlign: 'center'
      }
    }))

    this.setData({
      activeMarkers: markers,
      activeSpots: filtered,
      hasFilter: filtered.length !== allSpots.length
    })
  },

  // ==================== Search ====================

  onSearchInput(e) {
    const v = e.detail.value.trim()
    this.setData({ searchText: v })
    if (v) {
      const results = this.data.allSpots.filter(s =>
        s.name.includes(v) || s.address.includes(v) || s.districtName.includes(v)
      ).slice(0, 8)
      this.setData({ searchResults: results })
    } else {
      this.setData({ searchResults: [] })
    }
  },

  onSearchFocus() { this.setData({ searchFocus: true }) },
  onSearchBlur() {
    setTimeout(() => this.setData({ searchFocus: false }), 200)
  },

  onSearchConfirm() {
    const results = this.data.searchResults
    if (results.length > 0) {
      this.navigateToSpot(results[0])
    }
  },

  clearSearch() {
    this.setData({ searchText: '', searchResults: [] })
  },

  onResultTap(e) {
    this.navigateToSpot(e.currentTarget.dataset.spot)
  },

  // ==================== Filter ====================

  toggleFilter() {
    this.setData({ showFilter: !this.data.showFilter })
  },

  toggleDistrict(e) {
    const d = e.currentTarget.dataset.district
    const sd = { ...this.data.selectedDistricts }
    sd[d] = !sd[d]
    this.setData({ selectedDistricts: sd })
  },

  toggleType(e) {
    const t = e.currentTarget.dataset.type
    const st = { ...this.data.selectedTypes }
    st[t] = !st[t]
    this.setData({ selectedTypes: st })
  },

  applyFilter() {
    this.buildMarkers()
    this.setData({ showFilter: false })
  },

  resetFilter() {
    const sd = {}
    this.data.districts.forEach(d => { sd[d] = true })
    const st = {}
    this.data.types.forEach(t => { st[t] = true })
    this.setData({ selectedDistricts: sd, selectedTypes: st })
    this.buildMarkers()
    this.setData({ showFilter: false })
  },

  // ==================== Legend / Layer ====================

  toggleLegend() {
    this.setData({ showLegend: !this.data.showLegend })
  },

  onLayerSwitch(e) {
    const type = e.currentTarget.dataset.type
    const legendTypes = this.data.legendTypes.map(t =>
      t.type === type ? { ...t, visible: !t.visible } : t
    )
    this.setData({ legendTypes })
    this.buildMarkers()
  },

  // ==================== Map Events ====================

  onMarkerTap(e) {
    const marker = this.data.activeMarkers[e.detail.markerId]
    if (!marker) return
    const spot = this.data.allSpots.find(s => s.id === marker.spotId)
    if (spot) this.navigateToSpot(spot)
  },

  onCalloutTap(e) {
    const marker = this.data.activeMarkers[e.detail.markerId]
    if (!marker) return
    const spot = this.data.allSpots.find(s => s.id === marker.spotId)
    if (spot) this.navigateToSpot(spot)
  },

  onRegionChange(e) {
    if (e.detail.type === 'end' && e.detail.causedBy === 'gesture') {
      const mc = e.detail.centerLocation
      this.setData({ mapCenter: { lat: mc.latitude, lng: mc.longitude } })
    }
  },

  navigateToSpot(spot) {
    const app = getApp()
    app.globalData.currentSpot = spot
    wx.navigateTo({ url: `/pages/spot/spot?id=${spot.id}` })
  },

  // ==================== Itinerary ====================

  goItinerary() {
    const app = getApp()
    this.setData({
      itinerary: app.globalData.itinerary,
      itineraryCount: app.globalData.itinerary.length,
      showItinerary: !this.data.showItinerary
    })
  },

  async removeFromItinerary(e) {
    const spotId = e.currentTarget.dataset.id
    const itineraryId = e.currentTarget.dataset.itineraryId

    const app = getApp()

    // Snapshot for rollback
    const previousItinerary = [...app.globalData.itinerary]

    // Optimistic local removal
    app.globalData.itinerary = app.globalData.itinerary.filter(s => s.id !== spotId)
    this.setData({
      itinerary: app.globalData.itinerary,
      itineraryCount: app.globalData.itinerary.length
    })

    // Sync to server
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
        // Reload canonical state from server
        await app.loadItineraryFromServer()
        this.setData({
          itinerary: app.globalData.itinerary,
          itineraryCount: app.globalData.itinerary.length
        })
      } catch (e) {
        // Rollback on failure
        app.globalData.itinerary = previousItinerary
        this.setData({
          itinerary: previousItinerary,
          itineraryCount: previousItinerary.length
        })
        wx.showToast({ title: '移除失败，请稍后再试', icon: 'none' })
      }
    }
  },

  clearItinerary() {
    const app = getApp()
    wx.showModal({
      title: '确认清空',
      content: '确定要清空所有行程吗？',
      success: async (res) => {
        if (res.confirm) {
          // Delete all itineraries from server if logged in
          if (app.globalData.isLoggedIn) {
            const ids = [...new Set(
              app.globalData.itinerary.map(s => s.itineraryId).filter(Boolean)
            )]
            for (const id of ids) {
              try {
                await api.del(`/itineraries/${id}`, true)
              } catch (e) {
                // Continue deleting others
              }
            }
          }

          app.globalData.itinerary = []
          this.setData({
            itinerary: [],
            itineraryCount: 0,
            polylines: []
          })
        }
      }
    })
  },

  showRoute() {
    const { itinerary } = this.data
    if (itinerary.length < 2) {
      wx.showToast({ title: '至少需要2个景点', icon: 'none' })
      return
    }
    const points = itinerary.map(s => ({ latitude: s.lat, longitude: s.lng }))
    this.setData({
      polylines: [{
        points,
        color: '#c49a2b',
        width: 4,
        dottedLine: true,
        arrowLine: true,
        borderColor: '#fff',
        borderWidth: 1
      }],
      mapCenter: { lat: points[0].latitude, lng: points[0].longitude },
      mapScale: 13,
      showItinerary: false
    })
    wx.showToast({ title: `已绘制 ${itinerary.length} 个景点路线`, icon: 'success' })
  }
})
