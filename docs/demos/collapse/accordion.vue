<template>
  <Collapse v-model="opens" accordion>
    <CollapseItem name="a" title="first item a"> 第一个内容</CollapseItem>
    <CollapseItem name="b" title="second item b"> 第二个内容</CollapseItem>
    <CollapseItem name="c" title="third item c"> 第三个内容 </CollapseItem>
  </Collapse>
</template>

<script setup lang="ts">
import Collapse from '@/components/Collapse/Collapse.vue';
import CollapseItem from '@/components/Collapse/CollapseItem.vue';
import { ref } from 'vue';

const opens = ref(['a']);
</script>

<style scoped></style>
