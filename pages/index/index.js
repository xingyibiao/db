var API_URL = 'https://api.douban.com/v2/movie/top250'

Page({
	data:{
		title:"加载中......",
		movies:[]
	},
	onLoad:function(){
		var that = this
		wx.showToast({
			title:"加载中...",
			icon:"loading",
			duration:1000
		});
		
		wx.request({
			url:API_URL,
			data:{},
			header:{
				'content-type': 'json'
			},
			success:function(res){
				var data = res.data;
				that.setData({
					title:data.title,
					movies:data.subjects
				});
				wx.hideToast();
				//console.log(res.data)
			}
		})
	}
	
})
