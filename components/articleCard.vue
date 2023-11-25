<template>
  <div class="p-5 border border-color rounded-lg flex flex-col gap-2">
    <div>
      <img :src="article.image" :alt="article.title" class="w-full" />
    </div>
    <h2 class="text-lg font-bold">{{ article.title }}</h2>
    <p class="mb-5">{{ article.description }}</p>

    <div class="mt-auto">
      <nuxt-link
        :to="$route.path + '/lorem-ipsum-dolor-sit-amet?product=detail'"
        ><UButton
          color="primary"
          size="xl"
          variant="solid"
          trailing-icon="i-heroicons-arrow-right-circle"
          >Read More</UButton
        ></nuxt-link
      >
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
