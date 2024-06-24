<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from './components/Button/Button.vue';
import type { ButtonInstance } from './components/Button/types';

const btnRef = ref<ButtonInstance | null>(null);
onMounted(() => {
  console.log(btnRef.value?.ref);
});
</script>

<template>
  <main>
    <Button ref="btnRef" type="primary" plain disabled native-type="button">test</Button>
  </main>
</template>

<style scoped></style>
