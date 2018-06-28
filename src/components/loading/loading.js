/**
 * @fileOverview 蒙层组件逻辑
 * @author houquan | houquan@babytree-inc.com
 * @version 1.0.0 | 2018-04-12   // 初始版本
 * 
 * @description
 * 组件属性：
 *  show {Boolean}                  控制 layer 组件的显隐
 *  tapCloseable {Boolean}          是否点击 layer 区域隐藏 layer
 * 
 * 自定义事件
 *  layershow    layer 显隐时触发， event.detail.show {Boolean} true 表示 layer 显示，false 表示 layer 隐藏
*/

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer: function (newVal) {
        const { hide } = this.data
        newVal === hide && this.show(newVal)
      }
    },
    tapCloseable: {
      type: Boolean,
      value: true
    }    
  },

  /**
   * 组件的初始数据
   */
  data: {
    hide: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show: function (show = true) {
      this.setData({
        hide: !show
      })
      this.triggerEvent('layershow', {
        show
      })
    },

    onTouchMoveHandler: function () {
      return false
    },

    onTapHandler: function (event) {
      const { tapCloseable } = this.properties
      tapCloseable && this.show(false)
    }
  },

  attached: function () {
    const { show } = this.properties
    this.show(show)
  }
})
