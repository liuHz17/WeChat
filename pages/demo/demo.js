Page({
  data: {
    name: 'weapp'
  },
  testTap: function () {
    console.log(this.data.name);
    this.setData({
      name: 'changed...'
    });
  }
});