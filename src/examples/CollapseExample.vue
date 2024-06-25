<template>
  <Collapse v-model="opens" accordion>
    <CollapseItem name="a" title="first item a"> 第一个</CollapseItem>
    <CollapseItem name="b" title="second item b"> 第二个</CollapseItem>
    <CollapseItem name="c" disabled>
      <template #title>
        <p>this is c,have been disabled</p>
      </template>
      <div>第三个内容</div>
    </CollapseItem>
  </Collapse>
</template>

<script setup lang="ts">
import Collapse from '@/components/Collapse/Collapse.vue';
import CollapseItem from '@/components/Collapse/CollapseItem.vue';
import { ref } from 'vue';

const opens = ref(['a']);
</script>

<style scoped></style>
