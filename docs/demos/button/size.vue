<template>
  <div class="size block">
    <Button size="large"> Large </Button>
    <Button> Default </Button>
    <Button size="small"> Small </Button>
    <Button size="large" icon="search"> Large </Button>
    <Button icon="search"> Default </Button>
    <Button size="small" icon="search"> Small </Button><br /><br />
    <Button size="large" round> Large </Button>
    <Button round> Default </Button>
    <Button size="small" round> Small </Button>
    <Button size="large" round icon="search"> Large </Button>
    <Button round icon="search"> Default </Button>
    <Button size="small" round icon="search"> Small </Button>
  </div>
</template>
<script setup lang="ts">
import Button from '@/components/Button/Button.vue';
</script>
