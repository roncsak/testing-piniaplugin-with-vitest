<script setup lang="ts">
import { computed } from 'vue';
import { useDummyStore } from './store/dummy';

const dummyStore = useDummyStore();
const message = computed(() => {
  return dummyStore.getMessage();
});
</script>

<template>
  {{ message }}
</template>
