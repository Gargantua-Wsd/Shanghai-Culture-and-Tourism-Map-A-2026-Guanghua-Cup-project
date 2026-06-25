const auth = require('../../utils/auth')
const api = require('../../utils/api')

Page({
  data: {
    isLoggedIn: false,
    userInfo: { avatar: '', nickname: '' },
    itineraryCount: 0,
    showNicknameModal: false,
    showAboutModal: false,
    showProfileModal: false,
    newNickname: '',
    // Profile form data
    profileForm: {
      gender: '',
      birthday: '',
      region: '',
      bio: ''
    },
    genderOptions: ['保密', '男', '女'],
    genderIndex: 0
  },

  onLoad() {
    this.syncState()
  },

  onShow() {
    this.syncState()
  },

  syncState() {
    const app = getApp()
    const userInfo = app.globalData.userInfo || { avatar: '', nickname: '' }
    this.setData({
      isLoggedIn: app.globalData.isLoggedIn,
      userInfo,
      itineraryCount: (app.globalData.itinerary || []).length
    })
  },

  // ==================== Login / Logout ====================

  async handleLogin() {
    try {
      const res = await auth.login()
      if (res) {
        const app = getApp()
        this.setData({
          isLoggedIn: true,
          userInfo: app.globalData.userInfo || { avatar: '', nickname: '' }
        })
        wx.showToast({ title: '登录成功', icon: 'success' })
        app.loadItineraryFromServer().then(() => {
          this.setData({ itineraryCount: (app.globalData.itinerary || []).length })
        })
      }
    } catch (e) {
      wx.showToast({ title: '登录失败，请稍后再试', icon: 'none' })
    }
  },

  handleLogout() {
    wx.showModal({
      title: '确认退出',
      content: '退出登录后将清除本地缓存',
      success: (res) => {
        if (res.confirm) {
          const app = getApp()
          app.logout()
          this.setData({
            isLoggedIn: false,
            userInfo: { avatar: '', nickname: '' },
            itineraryCount: 0
          })
          wx.showToast({ title: '已退出登录', icon: 'none' })
        }
      }
    })
  },

  // ==================== Avatar ====================

  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    if (!avatarUrl) return

    const app = getApp()
    app.globalData.userInfo = { ...app.globalData.userInfo, avatar: avatarUrl }
    this.setData({ userInfo: app.globalData.userInfo })

    if (app.globalData.isLoggedIn) {
      auth.updateProfile({ avatar: avatarUrl }).catch(() => {})
    }
  },

  // ==================== Nickname ====================

  editNickname() {
    this.setData({
      showNicknameModal: true,
      newNickname: this.data.userInfo.nickname || ''
    })
  },

  hideNicknameModal() {
    this.setData({ showNicknameModal: false })
  },

  onNicknameInput(e) {
    this.setData({ newNickname: e.detail.value })
  },

  saveNickname() {
    const nickname = this.data.newNickname.trim()
    if (!nickname) {
      wx.showToast({ title: '昵称不能为空', icon: 'none' })
      return
    }

    const app = getApp()
    app.globalData.userInfo = { ...app.globalData.userInfo, nickname }
    this.setData({
      userInfo: app.globalData.userInfo,
      showNicknameModal: false
    })

    if (app.globalData.isLoggedIn) {
      auth.updateProfile({ nickname }).catch(() => {})
    }
  },

  // ==================== Profile Editing ====================

  editProfile() {
    const app = getApp()
    const userInfo = app.globalData.userInfo || {}
    const gender = userInfo.gender || '保密'
    const genderIndex = this.data.genderOptions.indexOf(gender)

    this.setData({
      showProfileModal: true,
      profileForm: {
        gender: gender,
        birthday: userInfo.birthday || '',
        region: userInfo.region || '',
        bio: userInfo.bio || ''
      },
      genderIndex: genderIndex >= 0 ? genderIndex : 0
    })
  },

  hideProfileModal() {
    this.setData({ showProfileModal: false })
  },

  onGenderChange(e) {
    const idx = Number(e.detail.value)
    this.setData({
      genderIndex: idx,
      'profileForm.gender': this.data.genderOptions[idx]
    })
  },

  onBirthdayChange(e) {
    this.setData({ 'profileForm.birthday': e.detail.value })
  },

  onRegionInput(e) {
    this.setData({ 'profileForm.region': e.detail.value })
  },

  onBioInput(e) {
    this.setData({ 'profileForm.bio': e.detail.value })
  },

  saveProfile() {
    const app = getApp()
    const { profileForm } = this.data

    app.globalData.userInfo = {
      ...app.globalData.userInfo,
      gender: profileForm.gender,
      birthday: profileForm.birthday,
      region: profileForm.region,
      bio: profileForm.bio
    }

    this.setData({
      userInfo: app.globalData.userInfo,
      showProfileModal: false
    })

    if (app.globalData.isLoggedIn) {
      auth.updateProfile({
        gender: profileForm.gender,
        birthday: profileForm.birthday,
        region: profileForm.region,
        bio: profileForm.bio
      }).catch(() => {})
    }

    wx.showToast({ title: '资料已保存', icon: 'success' })
  },

  // ==================== About ====================

  showAbout() {
    this.setData({ showAboutModal: true })
  },

  hideAboutModal() {
    this.setData({ showAboutModal: false })
  },

  // ==================== Navigation ====================

  goToItinerary() {
    wx.navigateTo({ url: '/pages/itinerary/itinerary' })
  },

  goToMyReviews() {
    wx.navigateTo({ url: '/pages/my-reviews/my-reviews' })
  },

  goToFavorites() {
    wx.navigateTo({ url: '/pages/favorites/favorites' })
  },

  goToHistory() {
    wx.navigateTo({ url: '/pages/history/history' })
  },

  noop() {}
})
