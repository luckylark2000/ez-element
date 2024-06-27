<template>
  <div class="ez-collapse-item" :class="{ 'is-disabled': disabled }">
    <div
      class="ez-collapse-item__header"
      :class="{ 'is-disabled': disabled, 'is-active': isActive }"
      :id="`item-header-${name}`"
      @click="handleClick"
    >
      <slot name="title">{{ title }}</slot>
      <Icon icon="angle-right" class="header-angle" />
    </div>
    <Transition name="slide" v-on="transitionEvents">
      <div class="ez-collapse-item__wrapper" v-show="isActive">
        <div class="ez-collapse-item__content" :id="`item-content-${name}`">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import type { CollapseItemProps } from '@/components/Collapse/types.d.ts';
import { collapseContextKey } from './constant';
import Icon from '@/components/Icon/Icon.vue';

defineOptions({
  name: 'EzCollapseItem',
});

const props = defineProps<CollapseItemProps>();

const collapseContext = inject(collapseContextKey);
//是否展开
const isActive = computed(() => {
  return props.disabled ? false : collapseContext?.activeNames.value.includes(props.name);
});
//处理点击事件
const handleClick = () => {
  if (props.disabled) return;
  collapseContext?.handleItemClick(props.name);
};

const transitionEvents: Record<string, (el: HTMLElement) => void> = {
  beforeEnter(el) {
    el.style.height = '0px';
    el.style.overflow = 'hidden';
  },
  enter(el) {
    el.style.height = `${el.scrollHeight}px`;
  },
  afterEnter(el) {
    el.style.height = '';
    el.style.overflow = '';
  },
  beforeLeave(el) {
    el.style.height = `${el.scrollHeight}px`;
    el.style.overflow = 'hidden';
  },
  leave(el) {
    el.style.height = '0px';
  },
  afterLeave(el) {
    el.style.height = '';
    el.style.overflow = '';
  },
};
</script>

<style scoped></style>
