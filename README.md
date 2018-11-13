# GGbengUI
基于vue2.o开发的UI库
基于vue 2 +，目前组件和文档在不断完善中。

## 特性

- 基于 [Vue](http://vuejs.org/)`>=v2.1.4` 开发的可复用 UI 组件，并且可随产品需要扩展
- 使用Vue官方的工作流，支持 ES6

## 浏览器支持

- 适用于 移动 和 部分PC 端

## 在线文档
更多说明，请查看[在线文档](https://ggbeng1.github.io/GGbengUI/)

## 开发  
> 全局引入 -- 在 webpack 入口文件 main.js 中如下配置：

``` bash
# 安装
cnpm install ggbeng-ui --save  

# 引入css
import 'ggbeng-ui/package/gui.min.css'  

# 引入xmui.min.js
import GGbeng from 'ggbeng-UI'  

# 注入到vue
Vue.use(GGbeng)
```

> 按需引入 -- 在 入口文件 main.js 或 组件内 中如下配置：

``` bash

# 一般组件
import gButton from 'ggbeng-ui/package/comps/components/button'
...

components: {
    gButton
}
``` 

## 组件列表
- [x] 按钮



