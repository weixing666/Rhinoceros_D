// pages/payfulfill/payfulfill.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  primarys(){
    wx.switchTab({
      url:`/pages/orderdelist/orderdelist`
    })
  }
})