// pages/movie/movie.js
var API_URL = 'https://api.douban.com/v2/movie/subject/'
Page({
  data:{},
  onLoad:function(params){
  	//console.log(params);//自index页面传来的item.id
  	var dataId = params.id;
  	//console.log(dataId)
  	var that = this;
  	wx.request({
  		url:API_URL+params.id,
  		data:{},
  		header:{
				'content-type': 'json'
			},
			success:function(res){
				//console.log(res.data)
				that.setData({
					movie:res.data
				})
			}
  	});
  }
})