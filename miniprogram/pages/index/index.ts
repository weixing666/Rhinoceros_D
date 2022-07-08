
const app = getApp<IAppOption>()
let appdata = getApp()
Page({
  data: {
    show: false,//弹窗
    columns: ['普通货物', '电子产品', '液体粉末', '内地EMS', '广东EMS'],
    country:""
  },

  // 展示弹窗
  showPopup() {
    this.setData({ show: true });
  },
  // 关闭弹窗
  onClose() {
    this.setData({ show: false });
  },
  // 确认
  onConfirm(event:any) {
    const {  value } = event.detail;
    wx.navigateTo({
      url:`/pages/address/address?id=${value}`
    })
  },
  // 取消
  onCancel() {
    this.setData({ show: false });
  },
  // 选择国家
  selectional(){
    wx.navigateTo({
      url:`/pages/countries/countries`
    })
  },
  // go知悉
  goinformed(){
    wx.navigateTo({
      url:`/pages/informed/informed?isshow=true`
    })
  },
  // go 运费估算
  estimated(){
    wx.navigateTo({
      url:`/pages/estimated/estimated`
    })
  },
  // gocopy 复制仓库地址\
  gocopy(){
    wx.navigateTo({
      url:`/pages/copyaddress/copyaddress`
    })
  },
  onLoad() { 
  },
  onShow(){
    this.setData({
      country:appdata.globalData.country
    })
  },
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
