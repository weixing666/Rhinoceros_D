let appdat = getApp()
Page({

  data: {
    active: 0, //默认激活_选项卡
    acknowledge:1,  //确认打包
    gopay:2, //去支付
    tab:[
      {active:0,title:"全部"},
      {active:1,title:"待支付"},
      {active:2,title:"已支付"},
      {active:3,title:"已完成"},
    ],
    // 状态
    orderinfo:{
      // 地址信息
      sendAddress:{
        
      },
      consaddress:{

      },
      // 快递信息
      express:{
      parnum:null, //快递个数
      annotation:null,//备注
      parorder:[], //快递单号
      },
      // 订单信息
      ordmessage:{
      order:null,
      path:null, //
      channel:"", //渠道
      orderstatus:{
        0:"待处理"
      }, //订单状态
      ordertime:""
      },
      // 状态注解
      arr:[
        {0:"待处理"},
        {1:"待入仓"},
        {2:"待拣货"},
        {3:"待打包"},
        {4:"待出仓"},
        {5:"已出仓"},
        {6:"有异常"},
      ]

    }
    
  },
  examine(){
    wx.navigateTo({
      url:`/pages/pack/pack`,
    })
  },
  // 切换tap栏触发函数
  onChange(e:any) {
    this.setData({
      active:e.detail.index
    })
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