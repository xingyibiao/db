// pages/history/history.js
var API_URL = 'https://api.douban.com/v2/movie/top250';
var dataArr = [];
Page({
  data:{
  	history:'搜索记录',
  	datatit:[],
  	noHistory:'暂无搜索记录',
  	isNoHistory:true
  },
  checkHistory:function(){

  },
  onLoad:function(){


    for(var i = 1;i <= 20 ;i++){

    	var datatitle = 'datatitle' + i;
    	var dataTitle = wx.getStorageSync(datatitle);
     	if(dataTitle == ''){
    		return
    	}
     	dataArr.push(dataTitle);
    	this.setData({datatit:dataArr})
    }


   	//判断是否有搜索记录，无记录时isNoHistory


    	if(dataArr.length == 0){
	    	this.setData({
	    		isNoHistory:true
	    	})

	    }else{
	    	this.setData({
	    		isNoHistory:false
	    	})
	    }
    	console.log(dataArr.length)




  },
  onReady:function(){
    // 页面渲染完成


  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  clearStorage:function(){
  	var that = this;
  	wx.showModal({
  		title: '提示',
  		content: '确实要清空历史记录吗？',
  		success:function(res){
  			//console.log(res)
  			//如果点击了确定
  			if(res.confirm){
  				wx.clearStorageSync()
  				wx.redirectTo({
  					url:'../history/history'
  				})

  			}
  		}
  	})
  	 //
  }

})
