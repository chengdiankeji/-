// pages/navigator/navigator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopId: null,
    details:{
      id1:[
        { url: "https://i1.bvimg.com/644713/331e882c449e29ce.jpg"},
        { url: "https://i1.bvimg.com/644713/331e882c449e29ce.jpg"},
        { url: "https://i1.bvimg.com/644713/331e882c449e29ce.jpg"}
      ],
      id2: [
        { url: "http://i1.bvimg.com/644713/2f9ade1c3315f4c6.jpg"},
        { url: "http://i1.bvimg.com/644713/2f9ade1c3315f4c6.jpg"},
        { url: "http://i1.bvimg.com/644713/2f9ade1c3315f4c6.jpg"}
      ],
      id3: [
        { url: "https://i1.bvimg.com/644713/331e882c449e29ce.jpg"},
        { url: "https://i1.bvimg.com/644713/331e882c449e29ce.jpg"},
        { url: "https://i1.bvimg.com/644713/331e882c449e29ce.jpg"}
      ],
      id4: [
        { url: "https://i1.bvimg.com/644713/331e882c449e29ce.jpg"},
        { url: "https://i1.bvimg.com/644713/331e882c449e29ce.jpg"},
        { url: "https://i1.bvimg.com/644713/331e882c449e29ce.jpg"}
      ]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id);
    this.setData({
      shopId: options.id
    });
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