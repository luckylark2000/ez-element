<template>
  <Collapse>
    <CollapseItem name="a" title="first item a"> 第一个</CollapseItem>
    <CollapseItem name="b" title="second item b"> 第二个</CollapseItem>
    <CollapseItem name="c" disabled>
      <template #title>
        <h1>this is c,have been disabled</h1>
      </template>
      <div>第三个内容</div>
    </CollapseItem>
  </Collapse>
</template>

<script setup lang="ts">
import Collapse from '@/components/Collapse/Collapse.vue';
import CollapseItem from '@/components/Collapse/CollapseItem.vue';
</script>

<style scoped></style>
