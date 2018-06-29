'use strict'
Component({
    options: {
        multipleSlots: true
    },
    properties: {
        direction: {
            type: String,
            value: 'ltr'
        },
        wrap: {
            type: String,
            value: 'wrap'
        },
        // 主轴对齐
        main: {
            type: String,
            value: 'normal'
        },
        cross: {
            type: String,
            value: 'normal'
        },
    }
})