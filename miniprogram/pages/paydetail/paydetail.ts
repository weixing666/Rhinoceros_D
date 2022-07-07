// pages/paydetail/paydetail.ts
Page({

  data: {
    checked: false, //复选框
    ispro:false, //里面同意按钮

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