// pages/awaitpay/awaitpay.ts
Page({
  data: {
    number:4, //用户的快递个数
    beizhu:"麻烦尽快发货!!!!,谢谢",
    show:false, //支付弹窗
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },
  // 支付确认地址
  confirm(){
    this.setData({
      show:true
    })
  },
  // 去支付
  gopayme(){
    wx.navigateTo({
      url:`/pages/support/support`
    })
  }
})