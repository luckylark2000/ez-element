<template>
  <div>
    <Button ref="buttonRef">Test Button</Button>
    <Button plain>Test Button</Button>
    <Button round>Round Button</Button>
    <Button circle>EZ</Button>
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
    <Button link type="primary" plain>Link Button</Button><br /><br />
    <Button loading>Loading</Button>
    <Button icon="arrow-up" size="small">Info</Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
</script>

<style scoped></style>
