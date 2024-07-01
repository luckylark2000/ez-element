---
title: Collapse  折叠面板
description: Collapse  组件的文档
---

<!--  markdownlint-disable  -->

# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响

:::preview title || component description content

demo-preview=../demos/collapse/basic.vue

:::

## 手风琴效果

每次只能展开一个面板

通过 accordion 属性来设置是否以手风琴模式显示。
:::preview

demo-preview=../demos/collapse/accordion.vue

:::

## 自定义面板标题

除了可以通过 title 属性以外，还可以通过具名 slot 来实现自定义面板的标题内容，以实现增加图标等效果。

:::preview

demo-preview=../demos/collapse/custom.vue

:::

## Collapse API

### Collapse Attributes

| 属性名                | 详情                                                            | 类型         | 默认值  |
| --------------------- | --------------------------------------------------------------- | ------------ | ------- |
| model-value / v-model | 当前活动面板，在手风琴模式下其类型是string，在其他模式下是array | string/array | []      |
| accordion             | 是否手风琴模式                                                  | boolean      | boolean |

### Collapse Slots

| 插槽名  | Description    | 子标签        |
| ------- | -------------- | ------------- |
| default | 自定义默认内容 | Collapse Item |

## Collapse Item API

### Collapse Item Attributes

| 属性名   | 说明       | 类型           | 默认值 |
| -------- | ---------- | -------------- | ------ |
| name     | 唯一标志符 | string /number | —      |
| title    | 面板标题   | string         | ''     |
| disabled | 是否禁用   | boolean        | false  |

### Collapse Item Slot

| 插槽名  | 说明                 |
| ------- | -------------------- |
| default | Collapse Item 的内容 |
| title   | Collapse Item 的标题 |