<template>
  <div>
    <Button ref="btnRef" type="primary" plain native-type="button">test</Button>
    <Button ref="buttonRef">Test Button</Button>
    <Button plain>Test Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button link>Link Button</Button>
    <Button link type="primary" plain>Link Button</Button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Button from '@/components/Button/Button.vue';
import type { ButtonInstance } from '@/components/Button/types';
const btnRef = ref<ButtonInstance | null>(null);
onMounted(() => {
  console.log(btnRef.value?.ref);
});
</script>

<style scoped></style>
