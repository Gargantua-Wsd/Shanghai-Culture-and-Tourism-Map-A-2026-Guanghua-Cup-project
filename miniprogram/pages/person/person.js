Page({
  data: {
    person: null,
    spotName: '',
    baikeUrl: ''
  },

  onLoad(options) {
    const app = getApp()
    const person = app.globalData.currentPerson
    const spotName = decodeURIComponent(options.spotName || '')

    if (!person) {
      wx.showToast({ title: '信息未找到', icon: 'none' })
      return
    }

    const baikeUrl = person.baikeUrl || ('https://baike.baidu.com/item/' + encodeURIComponent(person.name))
    this.setData({ person, spotName, baikeUrl })
  },

  openBaike() {
    const { baikeUrl, person } = this.data
    if (!baikeUrl) return
    const title = person.name.length > 8 ? person.name.substring(0, 8) + '…' : person.name
    wx.navigateTo({
      url: `/pages/webview/webview?title=${encodeURIComponent(title)}&url=${encodeURIComponent(baikeUrl)}`
    })
  }
})
