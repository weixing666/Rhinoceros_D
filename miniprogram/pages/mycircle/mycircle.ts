
Page({
  data: {
    show: false,
    code: "", //兑换吗 
  },
  // 显示弹出优惠券
  showPopup(){
    this.setData({
      show: true,
    })
  },
  // 获取code, ?????输入框内不可以粘贴的问题
  getcode(e:any){
    console.log(e);
  },
  // 会调用我的个人信息
  getUserInfo(e:any) {
    this.setData({
      code:e.detail.value
    })
  },

  // 关闭弹窗
  onClose() {
    this.setData({ show: false });
  },
  onLoad() {
  },
  
})