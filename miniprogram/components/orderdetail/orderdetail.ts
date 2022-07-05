// pages/orderdetail/orderdetail.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quantity:0,//要循环的单号合数
    numbertip:"", //提示单号需要数字类型
  },
  // 提示输入快递个数
  numberTip(e:any){
    let reg = /[1-9]{1,}/
    let istrue = reg.test(e.detail)
    if(!istrue){
      this.setData({
        numbertip:"请输入数字"
      })
    }else{
      this.setData({
        numbertip:"",
        quantity:parseInt(e.detail)
      })
    }
  },
  // 添加单号
  addorder(){
    let _this = this
    wx.showModal({
      title:"是否增加快递单号",
      content:"增加快递单号后，发往转运中心的快递个数+1。是否要继续？",
      success(){
        _this.setData({
          quantity:parseInt(_this.data.quantity + 1)
        })
      }
    })
  },
  // 删除单号
  deorder(){
    this.setData({
      quantity:parseInt(this.data.quantity - 1)
    })
  },
  // 提交订单
  submit(){
    wx.showModal({
      title:"是否确认打包所有的快递包裹",
      content:"确认后，订单进入捡货状态，快递包裹将会进行打包称重，是否要继续？",
      success(){
        // 设置状态为待拣货
        console.log("设置状态为待拣货");
      }
    })
  },
  onLoad() {

  },

  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})