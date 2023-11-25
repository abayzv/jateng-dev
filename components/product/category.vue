<template>
  <div class="border border-color rounded p-5 flex flex-col items-center gap-2">
    <div class="p-2 w-32 h-32">
      <img
        :src="props.category.image"
        :alt="props.category.title"
        class="w-full h-full object-contain rounded"
      />
    </div>
    <h2 class="text-lg font-bold">
      {{ props.category.title }}
    </h2>
    <div class="text-center mb-5 opacity-70">
      {{ props.category.excerpt }}
    </div>
    <UButton
      color="primary"
      variant="solid"
      class="mt-auto"
      trailing-icon="i-heroicons-arrow-right-circle"
      >Pelajari Sekarang</UButton
    >
  </div>
</template>

<script setup lang="ts">
export interface CategoryItem {
  title: string;
  link: string;
  excerpt: string;
  image: string;
}

const props = defineProps({
  category: {
    type: Object as PropType<CategoryItem>,
    required: true,
  },
});
</script>
