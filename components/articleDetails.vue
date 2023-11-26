<template>
  <Breadcumb :routes="$route.path.split('/').filter((route) => route !== '')" />
  <div class="flex gap-10 lg:flex-row flex-col">
    <!-- Content -->
    <div class="lg:border lg:border-color lg:p-5 rounded lg:w-3/4 w-full">
      <h1 class="text-2xl font-bold mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quidem atque
        dignissimos ad explicabo officiis perspiciatis!
      </h1>
      <div class="mb-5 opacity-50">Last Update: 21 Nov 2022 15:43</div>
      <img src="https://picsum.photos/seed/1/1000/480" alt="" />
      <article class="flex flex-col gap-3 lg:leading-9 lg:text-xl mt-5">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint commodi
          laborum doloremque rem minus animi, eum alias quas necessitatibus!
          Quae repellat adipisci cupiditate veritatis, nisi natus. Tempore
          veritatis autem accusantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          excepturi iusto pariatur fugiat numquam! Delectus minus ad inventore
          ipsum sed, aut itaque totam nobis esse neque officiis excepturi quidem
          magnam quas natus consectetur blanditiis cupiditate! Fugit amet
          maiores fugiat exercitationem vitae explicabo doloribus. Doloribus
          deleniti tempora laboriosam minima ullam nihil corrupti eaque ipsa
          voluptatem nulla sint aliquid excepturi id iusto rerum quam, harum
          ratione at officiis cumque maxime.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          excepturi iusto pariatur fugiat numquam! Delectus minus ad inventore
          ipsum sed, aut itaque totam nobis esse neque officiis excepturi quidem
          magnam quas natus consectetur blanditiis cupiditate!
        </p>

        <img src="https://picsum.photos/seed/7/1000/480" alt="" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
          excepturi iusto pariatur fugiat numquam! Delectus minus ad inventore
          ipsum sed, aut itaque totam nobis esse neque officiis excepturi quidem
          magnam quas natus consectetur blanditiis cupiditate! Fugit amet
          maiores fugiat exercitationem vitae explicabo doloribus. Doloribus
          deleniti tempora laboriosam minima ullam nihil corrupti eaque ipsa
          voluptatem nulla sint aliquid excepturi id iusto rerum quam, harum
          ratione at officiis cumque maxime.
        </p>
      </article>
    </div>
    <!-- Nav -->
    <div class="lg:w-1/4 w-full flex flex-col gap-2">
      <ContainerArticleListSide title="Artikel Populer" />
      <ContainerArticleListSide title="Artikel Pilihan" />
      <div class="sticky top-0 flex flex-col gap-5">
        <PopularTags />
        <SocialSide />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "nuxt/app";

const route = useRoute();
const router = useRouter();
onMounted(() => {
  const params = route.query.product;
  console.log(params);
  if (!params) {
    router.push("?product=detail");
  }
});
</script>

<style scoped>
article :not(img) {
  @apply opacity-70;
}

article img {
  @apply w-5/6 my-5;
}
</style>
