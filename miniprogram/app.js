const { spotsData, TYPE_ICONS, TYPE_NAMES, DISTRICT_NAMES } = require('./utils/constants')
const api = require('./utils/api')
const auth = require('./utils/auth')

App({
  globalData: {
    spots: spotsData,
    typeIcons: TYPE_ICONS,
    typeNames: TYPE_NAMES,
    districtNames: DISTRICT_NAMES,
    currentSpot: null,
    currentPerson: null,
    itinerary: [],
    userLocation: null,
    userInfo: null,
    token: null,
    isLoggedIn: false
  },

  onLaunch() {
    // Enrich spots with type info
    this.updateSpotsWithIcons()
    // Load saved token and restore login state
    this.restoreLoginState()
  },

  updateSpotsWithIcons() {
    this.globalData.spots = this.globalData.spots.map(s => ({
      ...s,
      typeIcon: this.globalData.typeIcons[s.type] || '📍',
      typeName: this.globalData.typeNames[s.type] || '',
      districtName: this.globalData.districtNames[s.district] || ''
    }))
  },

  async restoreLoginState() {
    const token = auth.getToken()
    if (token) {
      this.globalData.token = token
      this.globalData.isLoggedIn = true
      // Try to load user profile
      try {
        const profile = await auth.loadProfile()
        if (profile) {
          this.globalData.userInfo = profile
        }
      } catch (e) {
        // Token might be expired, try refresh
        try {
          const newToken = await auth.refreshToken()
          if (newToken) {
            this.globalData.token = newToken
            const profile = await auth.loadProfile()
            if (profile) {
              this.globalData.userInfo = profile
            }
          }
        } catch (e2) {
          // Refresh failed, clear auth state
          auth.logout()
          this.globalData.token = null
          this.globalData.isLoggedIn = false
          this.globalData.userInfo = null
        }
      }
      // Load itinerary from server
      if (this.globalData.isLoggedIn) {
        this.loadItineraryFromServer()
      }
    }
  },

  logout() {
    auth.logout()
    this.globalData.token = null
    this.globalData.isLoggedIn = false
    this.globalData.userInfo = null
    this.globalData.itinerary = []
  },

  async loadItineraryFromServer() {
    try {
      const itineraries = await api.get('/itineraries', {}, true)
      if (itineraries && Array.isArray(itineraries) && itineraries.length > 0) {
        // Flatten spots from all itineraries, enrich with full spot data
        const seen = new Set()
        const flatSpots = []
        for (const it of itineraries) {
          const spots = it.spots || []
          for (const s of spots) {
            const spotId = s.spotId
            if (seen.has(spotId)) continue
            seen.add(spotId)
            const fullSpot = this.globalData.spots.find(sp => sp.id === spotId)
            if (fullSpot) {
              flatSpots.push({
                id: spotId,
                itineraryId: it._id,
                name: fullSpot.name,
                typeIcon: fullSpot.typeIcon || '📍',
                address: fullSpot.address || '',
                lat: fullSpot.lat,
                lng: fullSpot.lng
              })
            }
          }
        }
        this.globalData.itinerary = flatSpots
      } else {
        this.globalData.itinerary = []
      }
    } catch (e) {
      // Preserve existing itinerary on reload failure
    }
  }
})
