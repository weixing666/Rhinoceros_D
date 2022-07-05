
Page({
  data: {
  },
  // 一键复制地址
  copy(){
    wx.setClipboardData({
            data: "集装箱仓库，深圳市龙华区龙华街道工业路壹城环智中心C座2607，13388888888,518000",
            success: function () {
              wx.getClipboardData({
                success: function () {
                  wx.showToast({
                    title: '复制成功',
                    icon: 'none',
                    duration: 2000
                  })
                }
              })
            }
          })
  },
  onLoad(Option:any) {
    // 参数
    console.log(Option)
  },

  onReady() {

  },
  onShow() {

  },

  onHide() {

  },
  onUnload() {

  },
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