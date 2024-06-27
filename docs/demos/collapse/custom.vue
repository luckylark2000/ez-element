<template>
  <Collapse v-model="opens" accordion>
    <CollapseItem name="a">
      <template #title>
        <div>slot title</div>
      </template>
      <div>第一个内容</div>
    </CollapseItem>
    <CollapseItem name="b" title="second item b">
      <template #title>
        <div>
          <span>slot title add icon</span>
          <Icon icon="circle-info" />
        </div>
      </template>
      <div>第二个内容</div>
    </CollapseItem>
    <CollapseItem name="c" disabled>
      <template #title>
        <div>this is c, have been disabled</div>
      </template>
      <div>第三个内容</div>
    </CollapseItem>
  </Collapse>
</template>

<script setup lang="ts">
import Collapse from '@/components/Collapse/Collapse.vue';
import CollapseItem from '@/components/Collapse/CollapseItem.vue';
import Icon from '@/components/Icon/Icon.vue';
import { ref } from 'vue';

const opens = ref(['a']);
</script>

<style scoped></style>
