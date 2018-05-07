//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/banner1.jpg',
      '../../images/banner2.jpg',
      '../../images/banner3.jpg',
      '../../images/banner4.jpg'
    ],
    shopImgs:[
      { url: '../../images/shop1.jpg', id: "1", shopName:"2018新款女包潮流个性时尚复古锁扣手提小包包女韩版单肩包斜挎包/Y180220" },
      { url: '../../images/shop2.jpg', id: "2", shopName: "新品复古时尚个性头层牛皮擦色荔枝纹单肩斜跨手提女包/Y180229"},
      { url: '../../images/shop3.jpg', id: "3", shopName: "包包女2018新款潮斜挎时尚百搭红色韩版真皮牛皮单肩包/F180403"  },
      { url: '../../images/shop4.jpg', id: "4", shopName: "斜挎包女韩版2018新款简约百搭潮包包女手提包大气波士顿真皮女包/F170431" },
      { url: '../../images/shop5.jpg', id: "5", shopName: "真皮手提包包女2018新款韩版百搭鳄鱼纹复古牛皮单肩斜挎潮/F180303" },
      { url: '../../images/shop6.jpg', id: "6", shopName: "潮包真皮女2018新款手提斜跨包简约时尚英伦风单肩复古小包/F180401" },
      { url: '../../images/shop7.jpg', id: "7", shopName: "新款牛皮圆环手提包欧美时尚复古单肩百搭斜跨潮流女包/F180370" },
      { url: '../../images/shop8.jpg', id: "8", shopName: "小包包女2018新款百搭手提包韩版潮链条水桶包时尚单肩斜挎包女包/F180355" },
      { url: '../../images/shop9.jpg', id: "9", shopName: "小包包简约软包纯色 头层牛皮单肩包斜挎包手提包进口植鞣革/F01044" },
      { url: '../../images/shop10.jpg', id: "10", shopName: "2018春夏季新款韩版时尚潮简约小包包pu复古铆钉信封包单肩斜挎包/F180273" },
      { url: '../../images/shop11.jpg', id: "11", shopName: "新款牛皮手提包简约百搭真皮女包小时尚单肩斜跨包 /F180380" },
      { url: '../../images/shop12.jpg', id: "12", shopName: "磨砂皮真皮手拎包2018新款购物袋形女士手提包时尚女包单肩斜跨包/F170360" },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
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
  },
})