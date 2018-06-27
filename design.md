# 如何开发一个小程序组件库，需要做什么?


## 目录结构

```
├── README.md
├── design.md
├── dist            打包后的文件目录
├── example         示例小程序
├── package.json    
├── scripts			构建脚本
└── src             源码目录
```

## 开发分析

- 目前常见的组件库开发方式
	- 在源码目录下开发，开发完成，打包

- 开发流程:
	- 开启开发模式
	- src 目录components下新建组件  
	- 开发组件，example小程序下查看效果

- 构建流程
	
	- 支持less，es next, iconfont编译
	- 支持自动生成组件介绍页面

	- dev: watch src下的组件变化，同步修改示例小程序源文件 得以预览
	- build: 编译源文件后生成源码至dist目录

















































