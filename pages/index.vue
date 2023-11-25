<template>
  <div>
    <h1 class="lg:text-3xl text-xl font-bold mb-5">Topik Pilihan</h1>

    <ContainerProductCategory />

    <div class="mt-10 rounded-xl overflow-clip">
      <img
        src="https://blog.alakmalak.com/wp-content/uploads/2016/09/laravel-banner.jpg"
        alt="Banner"
        class="w-full object-cover"
      />
    </div>

    <div class="flex mt-10 gap-10 lg:flex-row flex-col">
      <div class="lg:w-2/3 w-full flex flex-col gap-5">
        <ArticleBig />
        <ContainerArticleListHome title="Berita Terkini" />
        <ContainerArticleListHome title="Berita Terkini" />
      </div>
      <div class="lg:w-1/3 w-full flex flex-col gap-5">
        <ContainerArticleListSide title="Artikel Populer" />
        <ContainerArticleListSide title="Artikel Pilihan" />
        <div class="sticky top-0 flex flex-col gap-5">
          <PopularTags />
          <SocialSide />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "JATENGDEV - Beranda",
});
</script>
