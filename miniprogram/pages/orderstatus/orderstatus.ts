Page({
      data: {
          number:null,
          isdisabled:false,
          showvalue:[],
          message:"",//用户备注
      },
      onLoad() {
      },
  
      //循环生成输入框
      changenum(e:any){
        // 请输入大于0的数字
        let reg = /[1-9]{1,}/
        let isture = reg.test(e.detail.value )
        if(!isture){
          wx.showToast({
            title:"请输入大于0的数字",
            icon:"none",
            duration: 2000,
          })
          this.setData({
            number:null
          })
          return
        }
          //限制渲染长度
          if(e.detail.value >10){
              e.detail.value = 10
          }
          // 修改一下number的值
         this.setData({number:Number(e.detail.value),isdisabled:true})
          //判断,只要文本框输入的值不为假值就执行
          if(Number(e.detail.value)){
              let arr =[]
              for(let i = 0; i<e.detail.value; i++){
                  // 循环一个跟我们输入的value值长度相等的数组
                  arr[i] = i
              }
              // 加工成我们想要的对象类型类型
             let arr2 = arr.map((item:any,index)=>{
                  return{
                      id:index,
                      num:"",
                      disabled:false
                  }
              })
              // 修改一下showvalue的值,方便我们点击删除图标的时候判断
              this.setData({showvalue:arr2})
          } 
      },
       //点击删除图标时候
      delete(data:any){
          let _this = this //保留一下this
         wx.showModal({
             title:"确认删除吗",
             success(res){
                 if(res.confirm){
                     //拿到我们页面通过data-index 传过来的 item.id
                      let id = data.currentTarget.dataset.index
                     let newvalue = _this.data.showvalue.filter((item:any)=>{
                      //过滤showvalue中id等于我们穿过来的id的属性
                          return item.id !== id 
                      })
                      // 再次修改showvalue的值
                      _this.setData({showvalue:newvalue,number:_this.data.number - 1})
                      if(_this.data.number == 0){
                          _this.setData({
                            isdisabled:false
                          })
                      }
                 }
             }
         })
      },
      // 点击添加单号的时候
      addorder(){
        if(this.data.number >= 10){
          wx.showToast({
            title: '最多添加10个哦',
            icon: 'none',
            duration: 2000
          })
          return
        }

        this.setData({
          number:this.data.number*1 + 1
        })
        let time  = new Date().getTime()
        let obj = {
          id:time,num:""
        }
        this.data.showvalue.push(obj)
        this.setData({
           showvalue:this.data.showvalue
        })
      },
      // 输入具体订单号
      getorder(e:any){
        let order = e.detail
        let dirid = e.currentTarget.dataset.index //保存用户正在输入输入框的id
        this.data.showvalue.forEach((e:any,index)=>{
          if(e.id == dirid){
            this.setData({
              [`showvalue[${index}].num`]:order
            })
          }
        })
       
      },
      // 提交订单
      submit(){
        wx.switchTab({
          url:`/pages/orderdelist/orderdelist`
        })
      },
      // 用户填完后提醒确认
      tip(e:any){
        if(e.detail.value == '') return
        let dirid = e.currentTarget.dataset.index //保存用户正在操作输入框的id
        let _this = this
        wx.showModal({
          title: '请确认快递单号是否无误',
          content: `请确认快递单号 ${e.detail.value} 是否无误，一旦提交，不可修改。`,
          success (res) {
            if (res.confirm) {
              _this.data.showvalue.forEach((e:any,index)=>{
                if(e.id == dirid){
                  _this.setData({
                    [`showvalue[${index}].disabled`]:true
                  })
                }
              })
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
})
  
    