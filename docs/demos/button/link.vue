<template>
  <div>
    <Button link>Default</Button>
    <Button type="primary" link>Primary</Button>
    <Button type="success" link>Success</Button>
    <Button type="info" link>Info</Button>
    <Button type="warning" link>Warning</Button>
    <Button type="danger" link>Danger</Button><br /><br />
    <Button link disabled>Default</Button>
    <Button type="primary" link disabled>Primary</Button>
    <Button type="success" link disabled>Success</Button>
    <Button type="info" link disabled>Info</Button>
    <Button type="warning" link disabled>Warning</Button>
    <Button type="danger" link disabled>Danger</Button>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
</script>
