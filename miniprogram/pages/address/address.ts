// pages/address/address.ts
Page({

  data: {
    // 验证提示
    tipName:"",
    tipphone:"",
    tipAddress:"",
    tipCity:"",
    tipPostCode:"",
    // 用户输入的值
    Name:"",
    phone:"",
    Address:"",
    City:"",
    PostCode:"",
  },

  //验证名字 
  nametip(e:any){
    let reg = /[^\u4e00-\u9fa5]+/
    let istrue = reg.test(e.detail)
    if(!istrue){
      this.setData({
        tipName:"请输入英文填写名字"
      })
    }else{
      this.setData({
        tipName:"",
        Name:e.detail
      })
    }
  },
  //验证电话
  phonetip(e:any){
    let reg = /^1[3-9]\d{9}$/
    let istrue = reg.test(e.detail.value)
    if(!istrue){
      this.setData({
        tipphone:"非法电话号码"
      })
    }else{
      this.setData({
        tipphone:"",
        phone:e.detail.value
      })
    }
  },
  // 验证地址
  Address(e:any){
    let reg = /[^\u4e00-\u9fa5]+/
    let istrue = reg.test(e.detail)
    if(!istrue){
      this.setData({
        tipAddress:"请输入英文地址"
      })
    }else{
      this.setData({
        tipAddress:"",
        Address:e.detail
      })
    }
  },
  // 验证城市
  City(e:any){
    let reg = /[^\u4e00-\u9fa5]+/
    let istrue = reg.test(e.detail)
    if(!istrue){
      this.setData({
        tipCity:"不能包含中文"
      })
    }else{
      this.setData({
        tipCity:"",
        City:e.detail
      })
    }
  },
  // 验证邮编
  PostCode(e:any){
    let reg = /^[0-9]{6}$/
    let istrue = reg.test(e.detail)
    if(!istrue){
      this.setData({
        tipPostCode:"需填写6位数字组成的邮编"
      })
    }else{
      this.setData({
        tipPostCode:"",
        PostCode:e.detail
      })
    }
  },
  // 提交表单的时候触发,每个验证
  submit(){
    let regname = /[^\u4e00-\u9fa5]+/  //非中文
    let regiphone = /^1[3-9]\d{9}$/  //电话
    let PostCodereg = /^[0-9]{6}$/ //邮编
    let istrueName = regname.test(this.data.Name)
    let istrueiphone = regiphone.test(this.data.phone)
    let istrueAddress = regname.test(this.data.Address)
    let istrueCity = regname.test(this.data.City)
    let istruePostCode = PostCodereg.test(this.data.PostCode)
   if(!istrueName){
      this.setData({
        tipName:"请输入英文填写名字"
      })
      return
   }else if(!istrueiphone){
    this.setData({
      tipphone:"非法电话号码"
    })
    return
   }else if(!istrueAddress){
    this.setData({
      tipAddress:"请输入英文地址"
    })
    return
   }else if(!istrueCity){
    this.setData({
       tipCity:"不能包含中文"
    })
    return
   }else if(!istruePostCode){
    this.setData({
      tipPostCode:"需填写6位由数字组成的邮编"
    })
    return
   }else{
    //  验证完毕需要提交到数据库
     wx.navigateTo({
       url:`/pages/informed/informed?Name=${this.data.Name}&phone=${this.data.phone}
       &Address=${this.data.Address}&City=${this.data.City}&PostCode=${this.data.PostCode}&hide=false`
     })
   }
  },
  select(){
    wx.navigateTo({
      url:`/pages/myaddress/myaddress`
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