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
    color: {
      type: String,
      value: 'orange'
    },
    styleStr: {
      type: String,
      value: ''
    }
  }
})
