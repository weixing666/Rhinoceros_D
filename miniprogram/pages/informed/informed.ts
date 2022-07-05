// pages/informed/informed.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: false,
    isshow:"",//是否显示已阅读
  },
  iknoway(){
    wx.navigateBack()
  },
  // go我已知悉
  iknow(){
    if(this.data.checked === true){
      wx.navigateTo({
        url:"/pages/orderdetail/orderdetail"
      })
    }else{
      wx.showToast({
        title: '请勾选同意协议',
        // icon: 'error',
        icon: 'none',
        duration: 2000
      })
    }
  },
  // 勾选协议
  onChange(event:any) {
    this.setData({
      checked: event.detail,
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(Option:any) {
    let {isshow} = Option
    this.setData({
      isshow
    })
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