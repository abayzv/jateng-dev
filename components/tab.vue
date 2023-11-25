<template>
  <div v-if="props?.params === route.query?.product">
    <slot />
  </div>
</template>

<script setup>
import { useRoute } from "nuxt/app";

const route = useRoute();

const props = defineProps({
  params: {
    type: String,
    required: true,
  },
});
</script>
