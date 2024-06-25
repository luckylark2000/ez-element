<template>
  <i class="ez-icon" :class="{ [`ez-icon--${type}`]: type }" v-bind="$attrs" :style="customStyle">
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import type { IconProps } from './types';
import { omit } from 'lodash-es';
import { computed } from 'vue';
defineOptions({
  name: 'EzIcon',
  inheritAttrs: false,
});
const props = defineProps<IconProps>();

//过滤掉type和color属性再绑定到组件上
const filterProps = computed(() => omit(props, ['type', 'color']));

const customStyle = computed(() => {
  return props.color ? { color: props.color } : {};
});
</script>

<style scoped></style>
