// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: '天气',
    city: null
  },

  getCity: function (event){
    this.setData({
      city: event.detail.value
    });
  },

  query: function(){
    let url = `https://free-api.heweather.com/s6/weather/now?location=${this.data.city}&key=fa66a4c393974639bcb6f2c06bf504b8`;

    // 发送 HTTP 请求到第三方服务器
    let page = this;
    wx.request({
      url: url,
      success: function(res) {
        let weather = res.data.HeWeather6[0].now.cond_txt;
        page.setData({
          weather: weather
        });
      }
    });
  },
  goBack:function(){
    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  onShareAppMessage: function () {
  
  }
})