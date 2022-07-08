// pages/myaddress/myaddress.ts
Page({

  data: {
    // 标记是哪个页面过来的
    select:null,
    // 是否空地址
    isaddress:false,
    // 是否设置为默认寄样地址
    ischecked: false,
    // 地址列表数据
    myaddresslist:[
      {id:1,Name:"KK",phone:13723685482,Address:"INC 799 E DRAGRAM SUITE 5ATUCSON",City:"MEGASYSTEMS",PostCode:857050,isdefault:true},
      {id:2,Name:"koko",phone:13723685482,Address:"INC 799 E DRAGRAM SUITE 5ATUCSON",City:"MEGASYSTEMS",PostCode:857050,isdefault:false},
      {id:3,Name:"kaya",phone:13723685482,Address:"INC 799 E DRAGRAM SUITE 5ATUCSON",City:"MEGASYSTEMS",PostCode:857050,isdefault:false},
      {id:4,Name:"sini",phone:13723685482,Address:"INC 799 E DRAGRAM SUITE 5ATUCSON",City:"MEGASYSTEMS",PostCode:857050,isdefault:false},
    ]
  },

  address(){
    wx.navigateTo({
      url:`/pages/addressbook/addressbook`
    })
  },
  // 修改是否为默认地址
  onChange(e:any) {
    let id = e.currentTarget.dataset.id
    this.data.myaddresslist.forEach((e:any,index)=>{
      if(e.id == id){
        this.setData({
          [`myaddresslist[${index}].isdefault`]:true
        })
      }else{
        this.setData({
          [`myaddresslist[${index}].isdefault`]:false
        })
      }
       
    })
  },

  // 点击选择该地址作为本次寄件的地址
  capture(e:any){
    // 判断是不是寄件地址过来的,如果不是退出
    if(this.data.select !== "1" ){
      return
    }
    let id = e.currentTarget.dataset.id
    let seAdress = this.data.myaddresslist.find(e=>e.id === id)
    let Adress = JSON.stringify(seAdress)
    wx.navigateTo({
      url:"/pages/address/address?Adress=" + Adress
    })
    
    // console.log(id);
    // 是的话获取指定的数据传递
  },
  onLoad(optiones:any) {
    this.setData({
      select:optiones.select
    })
  },

  // 删除地址
  delete(e:any){
    
    console.log(e.currentTarget.dataset.id);
    wx.showModal({
      title: '删除地址',
      content: '确定删除吗',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
    
  },
  // 编辑地址
  edit(e:any){
    console.log(e.currentTarget.dataset.id); //要编辑的地址
    let id = e.currentTarget.dataset.id
    let seAdress = this.data.myaddresslist.find(e=>e.id === id)
    let Adress = JSON.stringify(seAdress)
    wx.navigateTo({
      url:"/pages/addressbook/addressbook?edit=" + Adress
    })
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