// pages/game/game.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: 0,
    level: 1,
    counter: 1
  },

  select: function (event) {
    console.log(event.target.dataset.test);

    if (event.target.dataset.test) {
      this.setData({
        score: this.data.score + 1
      });
    }

    let boxes = [];

    if (this.data.level < 10) {
      this.data.level++;
    }

    let level = this.data.level;

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r},${g},${b})`;

    let selectedIndex = Math.floor(Math.random() * level * level);

    let alpha = 1 - 1 / this.data.counter++;
    console.log(alpha);

    let selectedColor = `rgba(${r},${g},${b},${alpha})`;

    let length = `${20 / level}rem`;

    for (let index = 0; index < level * level; index++) {
      boxes[index] = { length: length, color: color, test: false };

      if (index === selectedIndex) {
        boxes[index].color = selectedColor;
        boxes[index].test = true;
      }
    }
    this.setData({
      boxes: boxes
    });
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