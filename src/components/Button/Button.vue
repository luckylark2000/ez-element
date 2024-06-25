<template>
  <button
    ref="_ref"
    class="ez-button"
    :class="{
      [`ez-button--${type}`]: type,
      [`ez-button--${size}`]: size,
      'is-plain': plain,
      'is-disabled': disabled,
      'is-loading': loading,
      'is-round': round,
      'is-circle': circle,
      'is-link': link,
    }"
    :disabled="disabled || loading"
    :type="nativeType"
    :autofocus="autofocus"
  >
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span><slot /></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type ButtonProps } from './types';
import Icon from '../Icon/Icon.vue';

defineOptions({ name: 'EzButton' });
withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
});

const _ref = ref<HTMLButtonElement | null>(null);

defineExpose({
  ref: _ref,
});
</script>

<style scoped></style>
