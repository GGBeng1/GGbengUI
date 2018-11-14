# Button 按钮
----
### 基础用法
使用```type```、```plain```、```icon```、```loading```、```long```、```bg-color```、```color```、```border-color```、```no-radius```和```round```属性来定义 Button 的样式。
使用```g-button-group```可以将button以等份布局。Auto Rename Tag
``` html
<g-button>普通按钮</g-button>
<g-button type="primary" @click="btnClick" icon="g__icon--checked" >primary按钮</g-button>
<g-button type="error" icon="g__icon--checked" ></g-button>
<g-button type="warning" disabled>禁止按钮</g-button>
<g-button plain>简约按钮</g-button>
<g-button type="text" icon="g__icon--checked">文字按钮</g-button>
<g-button bg-color="#fc0" color="#e0439a" border-color="#fc0">自定义颜色</g-button>
<g-button round long>长按钮</g-button>
<g-button-group>
    <g-button type="warning">警告按钮</g-button>
    <g-button type="primary" @click="btnClick" icon="g__icon--checked" >primary按钮</g-button>
</g-button-group>
```

### 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| long     | 长按钮   | Boolean  |    — | false   |
| type     | 类型   | string    |   primary,success,warning,danger,info |     —    |
| plain     | 是否简约按钮   | Boolean    | — | false   |
| disabled  | 是否禁用状态    | Boolean   | —   | false   |
| round     | 圆角   | Boolean  |    — | false   |
| bg-color     | 背景颜色   | string    | 自定义 |     —    |
| color     | 文字颜色   | string    |  自定义 |     —    |
| border-color     | 边框颜色   | string    |   自定义 |     —    | 
| no-radius     | 无边框   | string    |   自定义 |     —    | 

