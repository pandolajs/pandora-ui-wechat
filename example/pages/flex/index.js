// pages/flex/flex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    direction: 'ltr',
    wrap: 'wrap',
    main: 'normal',
    cross: "normal"
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
  
  },

  setDir(e) {
    let values = ['ltr', 'rtl', 'ttb', 'btt', 'start', 'center', 'between', 'around', 'evenly', 'stretch', 'center', 'start', 'end', 'nowrap','wrap',  'reverse-wrap']
    let index = e.target.dataset.index
    let value = values[index]
    let dir = (index >= 0 && index < 4) ? value : this.data.direction
    let main = (index >= 4 && index < 9) ? value : this.data.main
    let cross = (index >= 9 && index < 13) ? value : this.data.cross
    let wrap = (index >= 13 && index < 16) ? value : this.data.wrap
    console.log(dir, main, cross, wrap)
    this.setData({
      direction: dir ,
      main,
      cross,
      wrap
    })
  }
})