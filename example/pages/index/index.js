//index.js
//获取应用实例
const app = getApp()
import componentsDes from '../../des.js'

Page({
  data: {
    list: []
  },
  onLoad: function () {
    console.log(componentsDes)
    this.setData({
      list: componentsDes
    })
  }
})
