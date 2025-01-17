---
title: Button
description: Button 组件的文档
---

<!-- markdownlint-disable -->

# Button

常用的操作按钮

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

:::preview title || component description content

demo-preview=../demos/button/basic.vue

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用， 该属性接受一个 Boolean 类型的值。
:::preview

demo-preview=../demos/button/disabled.vue

:::

## 链接按钮

你可以使用 `link` 属性来定义按钮是否为link状态， 该属性接受一个 `Boolean` 类型的值。

:::preview

demo-preview=../demos/button/link.vue

:::

## 图标按钮

使用 `icon` 属性来为按钮添加图标。图标名称请看 `fontawesome` 官网 https://fontawesome.com/icons。

:::preview

demo-preview=../demos/button/icon.vue

:::

## 加载状态按钮

通过设置 `loading` 属性为 `true` 来显示正在加载的状态。
:::preview

demo-preview=../demos/button/loading.vue

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 size 属性额外配置尺寸，可使用 `large`和`small`两种值。
:::preview

demo-preview=../demos/button/size.vue

:::

## Button API

### Button Attributes

| Name        | Description           | Type                                                             | Default |
| ----------- | --------------------- | ---------------------------------------------------------------- | ------- |
| size        | 尺寸                  | `enum` - `'large'\| 'small'`                                     | —       |
| type        | 类型                  | `enum` - `'primary'\| 'success'\| 'warning'\| 'danger'\| 'info'` | —       |
| plain       | 是否为朴素按钮        | `boolean`                                                        | false   |
| round       | 是否为圆角按钮        | `boolean`                                                        | false   |
| circle      | 是否为圆形按钮        | `boolean`                                                        | false   |
| loading     | 是否为加载中状态      | `boolean`                                                        | false   |
| disabled    | 按钮是否为禁用状态    | `boolean`                                                        | false   |
| icon        | 图标组件              | `string`                                                         | —       |
| autofocus   | 原生 `autofocus` 属性 | `boolean`                                                        | false   |
| native-type | 原生 `type` 属性      | `enum` - `'button'\| 'submit'\| 'reset'`                         | button  |

### Button Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
