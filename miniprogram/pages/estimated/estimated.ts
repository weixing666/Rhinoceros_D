
Page({
  data: {
    weight:"", //重量
    size:"", //尺寸
    show: false,//弹窗
    columns: ['普通货物', '电子产品', '液体粉末', '内地EMS', '广东EMS'],
    //价格映射
    pic:[
      {id:0,name:"普通货物",firstweipic:118, middlepic:78},
      {id:1,name:"电子产品",firstweipic:138, middlepic:98},
      {id:2,name:"液体粉末",firstweipic:158, middlepic:118},
      {id:3,name:"内地EMS",firstweipic:256, middlepic:98},
      {id:4,name:"广东EMS",firstweipic:256, middlepic:70},
    ], 
    // 渠道
    columnsvalue:"普通货物",
    // 预估价格
    estiprice:"?",
  },
  // 获取重量
  getweight(e:any){
    this.setData({
      weight:e.detail.value
    })
  },
  // 获取尺寸
  getsize(e:any){
    this.setData({
      size:e.detail.value.split(",")
    })
  },
  // 点击预估
  forecast(){
    // 客户规格
    let res = this.data.pic.find(e=> e.name === this.data.columnsvalue)
    // 体积重
    let wei = this.data.size[0] * this.data.size[1] * this.data.size[2] / 6000
    // 实际进入计算的重量
    let practical = this.data.weight > wei ? this.data.weight : wei
    // 首重价格
    let firStweipic = 0.5 * res.firstweipic
    // 过首价格
    let lastweipic = ( practical -0.5) * res.middlepic
    // 合计价格
    let toal = firStweipic + lastweipic
    // 小于0.5kg 的时候
    if(wei < 0.5){
      this.setData({
        estiprice:firStweipic.toFixed()
      })
    }else{
      this.setData({
        estiprice:toal.toFixed()
      })
    }
    
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
   this.setData({
    columnsvalue:value,
    show:false
   })
  },
  // 取消
  onCancel() {
    this.setData({ show: false });
  },
  onLoad() {
  },
  onReady() {
  },
  onShow() {
  },
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