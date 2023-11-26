<template>
  <nuxt-link to="/berita/lorem-ipsum-dolor-sit-amet" class="flex gap-5">
    <div class="w-1/4">
      <img
        :src="news.image"
        :alt="news.title"
        class="w-full lg:max-h-[12rem] max-h-[5rem] object-cover"
      />
    </div>
    <div class="w-3/4 flex flex-col gap-4">
      <div class="lg:flex hidden gap-2">
        <UBadge color="white" size="sm">Populer</UBadge>
        <UBadge color="white" size="sm">Teknologi</UBadge>
      </div>
      <h2 class="lg:text-2xl text-lg font-bold">{{ news.title }}</h2>
      <p class="mb-2 opacity-70 lg:block hidden">{{ news.description }}</p>
      <div>
        <span class="text-xs opacity-80">2 jam yang lalu</span>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup lang="ts">
export interface News {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const props = defineProps({
  news: {
    type: Object as PropType<News>,
    required: true,
  },
});
</script>
