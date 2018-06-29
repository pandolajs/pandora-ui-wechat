## loading 加载动画

### 使用指南

在页面json文件中引入组件

```json
  {
    "usingComponents": {
      "loading": "../../dist/loading/index"
    }
  }
```

在页面上直接使用 loading 标签即可
```html
  <loading type="jump"></loading>
  <loading type="scale"></loading>
  <loading type="fadeIn"></loading>
  <loading type="spinner"></loading>
  <loading type="circle"></loading>
  <loading type="ring"></loading>
```

### 具体参数
| 名称    | 类型            | 是否必须 | 默认  | 描述              |
| ------- | --------------- | -------- | ----- | ----------------- |
| type | String         | 否       | jump | loading样式类型 jump，scale，fadeIn，spinner，circle，ring |
| show | Boolean         | 否       | false | 控制loading的显示隐藏  |
| styleObj | Object | 否       | {} | 定制loading样式     |
