<template>
  <div class="ez-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide } from 'vue';
import { type CollapseProps, type NameType } from '@/components/Collapse/types';
import { collapseContextKey } from './constant';

defineOptions({
  name: 'EzCollapse',
});
const activeNames = defineModel<NameType[]>('modelValue', { default: () => [] });
//实现v-model、实现手风琴、修复延时修改响应式失效
const props = defineProps<CollapseProps>();

const handleItemClick = (ItemName: NameType) => {
  if (props.accordion) {
    activeNames.value = activeNames.value.includes(ItemName) ? [] : [ItemName];
  } else {
    const index = activeNames.value.indexOf(ItemName);
    if (index > -1) {
      activeNames.value.splice(index, 1);
    } else {
      activeNames.value.push(ItemName);
    }
  }
};
provide(collapseContextKey, { activeNames, handleItemClick });
// provide('handleItemClick', handleItemClick);
</script>

<style scoped></style>
