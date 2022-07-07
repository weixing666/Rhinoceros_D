// pages/support/support.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
    show:false,
  },

  onChange(event:any) {
    this.setData({
      checked: event.detail,
    });
  },
  confirm(){
    this.setData({
      show:true
    })
  },
  onLoad() {

  },

  // 点击了购买保险
  yespay(){
    console.log(1);
    wx.navigateTo({
      url:`/pages/paydetail/paydetail`
    })
  },
  // 点击了承担风险
  nopay(){
    console.log(2);
    wx.navigateTo({
      url:`/pages/paydetail/paydetail`
    })
  }
})