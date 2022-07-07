let appdat = getApp()
Page({

  data: {
    active: 0, //默认激活_选项卡
    acknowledge:1,  //确认打包
    gopay:2, //去支付

    // 状态
    state:{
      0:"待处理",
      1:"待入仓",
      2:"待拣货",
      3:"待打包",
      4:"待出仓",
      5:"已出仓",
      6:"有异常"
    }
    
  },
  examine(){
    wx.navigateTo({
      url:`/pages/pack/pack`,
    })
  },
  // 组件里面的切换触发函数
  onChange(e:any) {
    console.log(e);
    // wx.showToast({
    //   title: `切换到标签 ${e.detail.name}`,
    //   icon: 'none',
    // });
  },
  // 确认打包
  packaging(){
    wx.showModal({
      title: '是否确认打包所有的快递包裹',
      content: '确认后，订单进入捡货状态，快递包裹将会进行打包称重，是否要继续？',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  // 去支付
  gopay(){
    wx.navigateTo({
      url:`/pages/awaitpay/awaitpay`
    })
  },
  
  onLoad() {
  },
  onShow() {
    this.setData({
      active:appdat.globalData.active
    })
  },
  onHide() {
    appdat.globalData.active = 0
  },
})