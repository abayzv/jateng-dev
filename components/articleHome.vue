<template>
  <nuxt-link to="/berita/lorem-ipsum-dolor-sit-amet" class="flex gap-5">
    <div class="w-2/5">
      <img
        :src="article.image"
        :alt="article.title"
        class="w-full lg:max-h-[12rem] max-h-[5rem] object-cover"
      />
    </div>
    <div class="w-3/5 flex flex-col gap-4">
      <div class="lg:flex hidden gap-2">
        <UBadge color="white" size="sm">Populer</UBadge>
        <UBadge color="white" size="sm">Teknologi</UBadge>
      </div>
      <h2 class="lg:text-2xl text-lg font-bold">{{ article.title }}</h2>
      <p class="mb-2 opacity-70 lg:block hidden">{{ article.description }}</p>
      <div>
        <span class="text-xs opacity-80">2 jam yang lalu</span>
      </div>
    </div>
  </nuxt-link>
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
