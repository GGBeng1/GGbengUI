# Modal 弹出层

##  
## 全局弹出层
``` js
this.$modal.confirm(title, content, confirmText, cancelText, color, maskClosable, callBack)
this.$modal.alert(title, content, confirmText, color, autoClose, maskClosable, callBack)
this.$modal.prompt(title, placeholder, readonly, confirmText, cancelText, color, maskClosable, callBack)

this.$modal.confirm({
        title: '提示',
        content: '提示信息',
        confirmText: '确认',
        cancelText: '关闭',
        color: '#19be6b',
        callBack () {
          this.$modal.alert({
            title: '这里可以自定义',
            content: '开启3秒关闭，取消背景层关闭',
            confirmText: '确认',
            color: '#19be6b',
            autoClose: true,
            maskClosable: false
          })
        }
})

this.$modal.prompt({
        title: '提示',
        placeholder: '提示信息',
        confirmText: '确认',
        cancelText: '关闭',
        color: '#ed3f14',
        readonly: true,
        callBack (val) {
          this.$modal.alert({
            title: '提示',
            content: ` 这里可以自定义`,
            color: '#19be6b'
          })
        }
})
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title  | 标题   | string    |  自定义  |   —    |
| content     | 内容   | string  | 自定义 |  —   |
| maskClosable   | 可否点击背景关闭   | Boolean    | true，false |   true    |
| color     | 确定文字颜色   | string  | 自定义 |  —   |
| autoClose    | 自动关闭   | Boolean  | true，false |  默认为3秒，alert有，confirm和prompt无   |
| callBack     | 回调函数   | Function  | 自定义 | —  |
| placeholder  | prompt的input属性placeholder   | string  | — |  —  |
| confirmText  | 自定义confirm文字  | 自定义  | — |  确定  |
| cancelText  | 自定义cancel文字  | 自定义  | — |  取消  |