<template>
  <ez-collapse v-model="opens" accordion>
    <ez-collapse-item name="a" title="first item a"> 第一个内容</ez-collapse-item>
    <ez-collapse-item name="b" title="second item b"> 第二个内容</ez-collapse-item>
    <ez-collapse-item name="c" title="third item c"> 第三个内容 </ez-collapse-item>
  </ez-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const opens = ref(['a']);
</script>
