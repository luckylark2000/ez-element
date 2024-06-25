<template>
  <div class="ez-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { provide, ref } from 'vue';
import { type NameType } from '@/components/Collapse/types';
import { collapseContextKey } from './constant';

defineOptions({
  name: 'EzCollapse',
});

const activeNames = ref<NameType[]>([]);

const handleItemClick = (ItemName: NameType) => {
  const index = activeNames.value.indexOf(ItemName);
  if (index > -1) {
    activeNames.value.splice(index, 1);
  } else {
    activeNames.value.push(ItemName);
  }
};
provide(collapseContextKey, { activeNames, handleItemClick });
provide('handleItemClick', handleItemClick);
</script>

<style scoped></style>
