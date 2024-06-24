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
    <span><slot /></span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { type ButtonProps } from './types';

defineOptions({ name: 'EzButton' });
withDefaults(defineProps<ButtonProps>(), {
  // size: 'normal',
  // type: 'primary',
  // circle: false,
  // round: false,
  // link: false,
  // plain: false,
  // disabled: false,
  // loading: false,
  nativeType: 'button',
  // autofocus: false,
});

const _ref = ref<HTMLButtonElement | null>(null);

defineExpose({
  ref: _ref,
});
</script>

<style scoped></style>
