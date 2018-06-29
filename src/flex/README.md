## flex 弹性盒子

### 使用指南
在页面json文件中引入组件
```json
  {
    "usingComponents": {
      "flex": "../../dist/flex/flex"
    }
  }
```

在页面上直接使用 zan-loading 标签即可
```html
  <flex direction="ltr" main="center" cross="center" wrap="wrap"></flex>
```

### 具体参数
| 名称       | 类型            |  是否必须  | 默认     | 描述                |
| -------   | -----------    | --------  | -----   | -----------------   |
| direction | String         |    否     | ltr     | 主轴方向 可选值 ltr 左至右 rtl右至左 ttb顶至末 btt 末至顶 |
| main      | String         |    否     |  normal | 主轴排列方式 可选值 start center between around evenly  |
| cross     | String         |    否     | normal  | 交叉轴排列方式 可选值 stretch center start end     |
| wrap      | String         |    否     | wrap    | 换行方式 wrap nowrap wrap-reverse      |
