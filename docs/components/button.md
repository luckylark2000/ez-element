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
