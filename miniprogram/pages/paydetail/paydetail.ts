// pages/paydetail/paydetail.ts
Page({

  data: {
    checked:false, //复选框
    ispro:false, // 里面同意按钮协议的按钮,控制弹出层
    isquan:false, //优惠券弹出层
  },

  // 点击复选框
  onChange() {
    this.setData({ ispro: true });
  },
  // 点击同意本条款
  consent(){
    console.log(55);
    this.setData({ checked: true ,ispro:false});
  },
  // 弹出选择优惠券
  quan(){
    this.setData({
      isquan:true
    })
  },
  // 点击遮罩关闭协议弹窗
  shut(){
    this.setData({
      ispro:false
    })
  },
  // 点击遮罩关闭优惠券弹窗
  guaquan(){
    this.setData({
      isquan:false
    })
  },


  // 立即支付
  pay(){
    if(this.data.checked === false){
      wx.showModal({
        title: '温馨提示',
        content: '请先勾选协议',
        success (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }else{
      wx.navigateTo({
        url:`/pages/payfulfill/payfulfill`
      })
    }
   
  }
})