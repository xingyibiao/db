var API_URL = 'https://api.douban.com/v2/movie/search?q=';
var add = 0;
Page({
	data:{
		movies:{}
	},
	onLoad:function(){
		//var oldValue = document.getElementsByTagName("input")[0];
	},
	search:function(e){
		if(!e.detail.value){
			return;
		}
		wx.showToast({
			title:"加载中...",
			icon:"loading",
			duration:100000
		});
		var that = this;
		var value = e.detail.value;
		add++;
		if(add >= 20){
			add = 0;
		}
		var datatitle = 'datatitle'+add;
		wx.setStorageSync(datatitle,value)
		wx.request({
			url:API_URL+e.detail.value,
			data:{},
			header:{
				'Content-Type':'json'
			},
			success:function(res,e){
				//console.log(res.data)
				wx.hideToast();
				that.setData({
					movies:res.data.subjects
				});
				//console.log(value);
				//console.log(res.data.title);
					value = res.data.title;
					//console.log(value);
			}
			
		});
		//e.detail.value ='';
		//console.log(value);
		//oldValue.setAttribute('value','value')
	}
})
