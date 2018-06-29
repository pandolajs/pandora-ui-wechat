'use strict'
Component({
  options: {
    multipleSlots: true 
  },
  properties: {
    show: {
      type: Boolean,
      value: false
    },
    type: {
      type: String,
      value: 'jump'
    },
    styleObj: {
      type: Object,
      value: {},
      observer: function(newVal) {
        console.log(newVal)
        if (newVal && typeof newVal === 'object') {
          let style = ''
          for(let prop in newVal) {
            style += `${prop}:${newVal[prop]};`
          }
          this.setData({
            styleStr: style
          })
        }
      }
    }
  },
  data: {
    styleStr: ''
  }
})
