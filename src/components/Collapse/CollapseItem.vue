<template>
  <div class="ez-collapse-item" :class="{ 'is-disabled': disabled }">
    <div class="ez-collapse-item__header" :id="`item-header-${name}`" @click="handleClick">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="ez-collapse-item__content" :id="`item-content-${name}`" v-show="isActive">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { type CollapseItemProps } from '@/components/Collapse/types';
import { collapseContextKey } from './constant';

defineOptions({
  name: 'EzCollapseItem',
});

const props = defineProps<CollapseItemProps>();

const collapseContext = inject(collapseContextKey);
//是否展开
const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name);
});
//处理点击事件
const handleClick = () => {
  if (props.disabled) return;
  collapseContext?.handleItemClick(props.name);
};
</script>

<style scoped></style>
