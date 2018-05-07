// Pages/shop/shop.js
Page({
  data: {
    imgUrls: [
      'https://i4.bvimg.com/644713/7e1d5f2434aa3aeb.jpg',
      'https://i4.bvimg.com/644713/2634a322408f1321.jpg',
      'https://i4.bvimg.com/644713/a03fd4423ad12154.jpg',
      'https://i4.bvimg.com/644713/499657c72c2d1188.jpg',
      'https://i4.bvimg.com/644713/6d9d987a8d1ed088.jpg',
      'https://i4.bvimg.com/644713/64fba5337926e640.jpg',
      'https://i4.bvimg.com/644713/2fc87a03bf4f876e.jpg',
      'https://i4.bvimg.com/644713/9292d04a5a67df74.jpg'
    ],
    vertical: true,
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})