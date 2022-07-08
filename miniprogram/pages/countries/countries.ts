let appdata = getApp()
Page({
	data: {
		value:'', //搜索关键词
		countryData:{
			A:[{nation:'阿富汗',egnation:'Afghanistan'},{nation:'阿尔巴尼亚',egnation:'Albania'},{nation:'安道尔',egnation:'Andorra'}],
			B:[{nation:'巴哈马',egnation:'Bahamas'},{nation:'孟加拉',egnation:'Bangladesh'},{nation:'白俄罗斯',egnation:'Belarus'}],
			C:[{nation:'柬埔寨',egnation:'Cambodia'},{nation:'加拿大',egnation:'Canada'},{nation:'中国',egnation:'China'}],
			D:[{nation:'丹麦',egnation:'Denmark'}],
			G:[{nation:'法国',egnation:'France'},{nation:'冈比亚',egnation:'Gambia'}],
			H:[{nation:'几内亚',egnation:'Guinea'},{nation:'圭亚那',egnation:'Guyana'}],
			K:[{nation:'日本',egnation:'Japan'},{nation:'牙买加',egnation:'Jamaica'}],
			S:[{nation:'新加坡',egnation:'Singapore'},{nation:'索马里',egnation:'Somalia'}],
		},
		countryInfo:{}
	},
	onLoad(){
		//伪造一个空，传给changeOn，防止进来页面没有渲染全部数据
		let e = {detail:''}
		this.changeOn(e)
	},
	//搜索取消
	onCancel(){
		wx.navigateBack({
			delta:1
		})
	},
	//搜索
	changeOn(e:any){
		let searchkey = e.detail.toUpperCase() //转大写
		let countryInfo ={}  //保存索索结果
		let cnReg = /^[\u4E00-\u9FA5]/g  //全局匹配是否有中文
		let language = cnReg.test(searchkey) ? 'nation' :'egnation'  //true的话是输入中文搜索,false话是英文搜索 a
    let reg = new RegExp(searchkey)
    // 循环国家数据
		for(const k in this.data.countryData){
      // item是每一个国家的对象
			this.data.countryData[k].forEach(item =>{
        // item[language] == >  法国 或者 France
				if(reg.test(item[language])){
					if(countryInfo[k]){
						countryInfo[k].push(item)
					}else{
						countryInfo[k] = [item]
					}
				}
			})
    }
		this.setData({
			countryInfo
		})
	},
	//存到本地
	onAlternate(e:any){
    let data =  e.target.dataset.info.nation
    appdata.globalData.country = data
		// wx.setStorageSync('destination',data)
		wx.switchTab({
			url: '/pages/index/index',
		})
	}
})