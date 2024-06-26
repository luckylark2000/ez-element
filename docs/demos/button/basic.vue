<script setup>
import Button from '@/components/Button/Button.vue';
import Icon from '@/components/Icon/Icon.vue';
</script>
<template>
  <Button> hello </Button>
  <Button type="primary"> Primary </Button>
  <Button type="success"> Success </Button>
  <Button type="info"> Info </Button>
  <Button type="warning"> Warning </Button>
  <Button type="danger"> Danger </Button><br /><br />

  <Button plain> hello </Button>
  <Button type="primary" plain> Primary </Button>
  <Button type="success" plain> Success </Button>
  <Button type="info" plain> Info </Button>
  <Button type="warning" plain> Warning </Button>
  <Button type="danger" plain> Danger </Button><br /><br />

  <Button round> hello </Button>
  <Button type="primary" round> Primary </Button>
  <Button type="success" round> Success </Button>
  <Button type="info" round> Info </Button>
  <Button type="warning" round> Warning </Button>
  <Button type="danger" round> Danger </Button><br /><br />

  <Button circle> <Icon icon="star" /> </Button>
  <Button type="primary" circle> <Icon icon="star" /> </Button>
  <Button type="success" circle> <Icon icon="star" /> </Button>
  <Button type="info" circle> <Icon icon="star" /> </Button>
  <Button type="warning" circle> <Icon icon="star" /> </Button>
  <Button type="danger" circle> <Icon icon="star" /> </Button>
</template>
<style></style>
