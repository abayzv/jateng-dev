<template>
  <div>
    <!-- Menu title -->
    <h2 class="text-lg mb-5 font-bold">{{ title }}</h2>
    <!-- Menu links -->
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
