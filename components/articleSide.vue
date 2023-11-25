<template>
  <div class="flex gap-5">
    <div class="w-2/5">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full max-h-[5rem] object-cover"
      />
    </div>
    <div class="w-3/5">
      <h2 class="font-bold">{{ article.title }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const props = defineProps({
  article: {
    type: Object as PropType<Article>,
    required: true,
  },
});
</script>
