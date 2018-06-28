/**
 * @fileoverview 抽屉组件样式
 * @author houquan | houquan@babytree-inc.com
 * @version 1.0.0 | 2018-04-12    // 初始版本
 * 
 * @description
 * 组件属性
 *  show {Boolean}                    控制 drawer 的开闭
 *  position {String}                 drawer 组件的初始位置， 可选值 bottom, top, left, right 默认 bottom
 *  tapLayerCloseable {Boolean}       触摸 layer 组件是否关闭 drawer 默认： true
 *  closeable {Boolean}               是否显示右上角关闭按钮
 * 
 * 自定义事件
 *  drawershow            drawer 打开 / 关闭时触发，event.detail.show 用来表明 drawer 的开闭状态。
 *  drawerclosetap        drawer 右上角按钮点击时触发，event.datail 为空对象。
 */

Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['m-drawer'],
  properties: {
    show: {
      type: Boolean,
      value: false,
      observer: function (newValue) {
        const { show } = this.data
        newValue !== show && this.setData({
          show: newValue
        })
      }
    },
    closeIconNew: {
      type: Boolean,
      value: false
    },
    position: {
      type: String,
      value: 'bottom'
    },
    tapLayerCloseable: {
      type: Boolean,
      value: true
    },
    closeable: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTapHandler: function () {
      return false
    },

    onLayerShowHandler: function (event) {
      const { detail: { show } } = event
      this.setData({
        show
      })
    },

    onTransitionendHandler: function () {
      const { show } = this.data
      this.triggerEvent('drawershow', { show })
    },

    onCloseTapHandler: function () {
      this.setData({
        show: false
      })

      this.triggerEvent('drawerclosetap', {})
    },

    onDrawerTouchMoveHandler: function () {
      return false
    }
  }
})
