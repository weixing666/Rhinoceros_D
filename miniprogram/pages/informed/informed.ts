
Page({
  data: {
    isdisabled:true,
    text:"后可点击",
    time:5,
  },

  onLoad(Option:any) {
    let _this = this
    _this.setData({
      time:5
    })
    let timers = setInterval(() => {
      _this.setData({
        time:_this.data.time - 1
      })
      if(_this.data.time === 0){
        clearInterval(timers)
        _this.setData({
          text:"已知悉",
          isdisabled:false,
          time:""
        })
      }
      
      
    }, 1000);
  },

  iknowaytes(){
    if(this.data.isdisabled) return
    wx.navigateTo({
      url:`/pages/orderdetail/orderdetail`
    })
  },

})