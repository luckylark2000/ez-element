---
title: Icon
description: Icon 组件的文档
---

<!-- markdownlint-disable -->

# Icon

语义化的矢量图形。使用图标组件，默认已经作为`@goodlark/ez-element`的依赖，不需要额外再次安装

本组件使用的图标库是基于 [Font Awesome](https://fontawesome.com/icons)的[开源免费版](https://fontawesome.com/search?m=free&o=r)

Icon 组件的属性是基于 [add Icons styling with Vue](https://docs.fontawesome.com/web/use-with/vue/style)扩展了`type`和`color`属性。

## 基础用法

使用icon属性来设置图标，直接设置名称即可，图标库见[Font Awesome 开源免费版](https://fontawesome.com/search?m=free&o=r)。

:::preview title || component description content

demo-preview=../demos/icon/basic.vue

:::

## type 属性

基于传入的type 进行配置，一共包含`primary`、`success`、`warning`、`danger`、`info`五中类型。

:::preview title || component description content

demo-preview=../demos/icon/type.vue

:::

## color 属性

基于传入的color 进行自定义图标颜色。

:::preview title || component description content

demo-preview=../demos/icon/color.vue

:::

## Font Awesome Icon 原生属性

详情见[add Icons styling with Vue](https://docs.fontawesome.com/web/use-with/vue/style)。

:::preview title || component description content

demo-preview=../demos/icon/fontawesome.vue

:::

## Icon API

### Fontawesome Icon 原生 Attributes

见[add Icons styling with Vue](https://docs.fontawesome.com/web/use-with/vue/style)

[style-cheatsheet](https://docs.fontawesome.com/web/style/style-cheatsheet/)

### 扩展Icon Attributes

| 属性名 | 说明                     | 类型                                                             | 默认值   |
| ------ | ------------------------ | ---------------------------------------------------------------- | -------- |
| color  | svg 的 fill 颜色         | string                                                           | 继承颜色 |
| type   | 按钮类型和button类型一致 | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | 灰色     |
