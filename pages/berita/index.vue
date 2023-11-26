<template>
  <!-- <Breadcumb :routes="['berita']" /> -->
  <div class="pb-10 flex flex-col gap-5 items-center">
    <h1 class="text-4xl font-bold">
      <span class="border-b border-primary-500"> Berita </span>
    </h1>
    <p class="opacity-70">
      Temukan berita terbaru seputar teknologi di Jawa Tengah
    </p>
  </div>

  <!-- News Category List -->
  <div class="border-y border-color mb-10 py-3">
    <ul class="flex lg:w-1/2 lg:justify-between mx-auto gap-10 overflow-x-auto">
      <template v-for="(category, index) in categories">
        <li v-if="index === 0">
          <nuxt-link
            to="/berita"
            :class="`hover:text-primary-500 ${
              $route.query.filter === undefined ? 'font-bold' : 'opacity-70'
            }`"
          >
            {{ category }}
          </nuxt-link>
        </li>
        <li v-else>
          <nuxt-link
            :to="`?filter=${category.toLowerCase()}`"
            :class="`hover:text-primary-500 ${
              $route.query.filter === category.toLowerCase()
                ? 'font-bold'
                : 'opacity-70'
            }`"
          >
            {{ category }}
          </nuxt-link>
        </li>
      </template>
    </ul>
  </div>

  <div>
    <ContainerNewsList />
  </div>
</template>
<script setup lang="ts">
const categories = ["Semua", "Populer", "Teknologi", "Startup", "Developer"];
</script>

<style scoped>
/* hide scroll bar */
::-webkit-scrollbar {
  display: none;
}
</style>
