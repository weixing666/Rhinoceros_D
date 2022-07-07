Page({
      data: {
          number:'',
          isdisabled:false, //快递数量
          orderdisabled:true, //快递单号
          showvalue:[
          {id:0,num:1},
          {id:1,num:1},
          {id:2,num:2},
          {id:3,num:3},
        ],
      },
      onLoad() {
      },
  
      //当快递单号个数输入框失去焦点时候
      changenum(e:any){
          if(!e.detail.value){
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
                      num:item
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
                      _this.setData({showvalue:newvalue})
                 }
             }
         })
      },
      // 点击添加单号的时候
      addorder(){
          let _this = this //保留一下this
         wx.showModal({
             title:"确认添加吗",
             success(res){
                 if(res.confirm){
                 }
             }
         })
      },
      // 输入具体订单号
      getorder(e:any){
      },
      // 确认打包
      submit(){
        wx.showModal({
          title: '是否确认打包所有的快递包裹',
          content: '确认后，订单进入捡货状态，快递包裹将会进行打包称重，是否要继续？',
          success (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },
})