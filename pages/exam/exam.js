// pages/exam/exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.pageId) {
      //这个pageId的值存在则证明首页的开启来源于用户点击来首页,同时可以通过获取到的pageId的值跳转导航到对应的详情页
      wx.navigateTo({
        url: '../index/index?pageId=' + options.pageId,
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    //来自页面内转发按钮
    if(res.from==="button"){
      console.log(res.target)
    }
    return{
      title:'转发支持',
      // 需要填入首页的地址,这样用户点击分享的卡片即进入首页.
      // 首页如何判断什么时候跳转, 第二首页如何知晓该跳转到哪一个详情页.
      path:'pages/exam/exam?pageId=123',
      // 一段代码实现了将值123带给了首页,同时首页需要通过这个值来判断进入首页的来源是否为用户点击了分享的卡片.
      success:function(res){
        //转发成功
      },
      fail: function (res) {
        //转发失败
      }
    }   
  }
})