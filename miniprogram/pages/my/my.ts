
let appdata = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isshow:false
  },
  goinformed(){
    wx.navigateTo({
      url: `/pages/informed/informed?isshow=${this.data.isshow}`
    })
  },
  // 去我的订单
  goorder(){
    appdata.globalData.active = 0
    wx.switchTab({
      url:"/pages/orderdelist/orderdelist?id=5"
    })
  },

  // go待付款
  obligation(){
    appdata.globalData.active = 1
    wx.switchTab({
      url:"/pages/orderdelist/orderdelist"
    })
  },
  // 去已支付
  goawaitorder(){
    appdata.globalData.active = 2
    wx.switchTab({
      url:"/pages/orderdelist/orderdelist"
    })
  },
  // 去评价
  gotoevaluate(){
    wx.navigateTo({
      url:`/pages/toevaluate/toevaluate`
    })
  },
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})