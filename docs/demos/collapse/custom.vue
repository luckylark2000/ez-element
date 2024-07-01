<template>
  <ez-collapse v-model="opens" accordion>
    <ez-collapse-item name="a">
      <template #title>
        <div>slot title</div>
      </template>
      <div>第一个内容</div>
    </ez-collapse-item>
    <ez-collapse-item name="b" title="second item b">
      <template #title>
        <div>
          <span>slot title add icon</span>
          <ez-icon icon="circle-info" />
        </div>
      </template>
      <div>第二个内容</div>
    </ez-collapse-item>
    <ez-collapse-item name="c" disabled>
      <template #title>
        <div>this is c, have been disabled</div>
      </template>
      <div>第三个内容</div>
    </ez-collapse-item>
  </ez-collapse>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const opens = ref(['a']);
</script>
