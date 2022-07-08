
Page({
  data: {
    checked1: false,
    checked2: false,
    show:false,
    supportvalue:null,
  },

  // 保价的百分之3
  onChange1(event:any) {
    this.setData({
      checked1: event.detail,
    });
  },
  // 保价的百分之2
  onChange2(event:any) {
    this.setData({
      checked2: event.detail,
    });
  },


  confirm(){
    // 如果没选保险,弹窗提醒
    if(!this.data.checked1 && !this.data.checked2){
      this.setData({
        show:true
      })
    }else{
        // 选了保险
        wx.navigateTo({
          url:`/pages/paydetail/paydetail`
        })
    }
   
    
  },
  onLoad() {

  },

  // 点击了购买保险
  yespay(){
    this.setData({
      show:false
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