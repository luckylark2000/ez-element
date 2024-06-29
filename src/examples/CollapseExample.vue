<template>
  <ez-collapse v-model="opens" accordion>
    <ez-collapse-item name="a" title="first item a"> 第一个</ez-collapse-item>
    <CollapseItem name="b" title="second item b"> 第二个</CollapseItem>
    <CollapseItem name="c" disabled>
      <template #title>
        <div>this is c,have been disabled</div>
      </template>
      <div>第三个内容</div>
    </CollapseItem>
  </ez-collapse>
</template>

<script setup lang="ts">
import CollapseItem from '@/components/Collapse/CollapseItem.vue';
import { ref } from 'vue';

const opens = ref(['a']);
</script>

<style scoped></style>
