<template>
  <div class="grid lg:grid-cols-4 gap-2">
    <ProductCategory
      v-for="category in categories"
      :key="category.title"
      :category="category"
    />
  </div>
</template>

<script setup lang="ts">
import type { CategoryItem } from "../product/category.vue";

const categories: CategoryItem[] = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png",
    title: "Laravel",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci.",
    link: "/#",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/640px-Vue.js_Logo_2.svg.png",
    title: "VueJS",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci.",
    link: "/#",
  },
  {
    image:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    title: "React",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci.",
    link: "/#",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
    title: "Python",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci.",
    link: "/#",
  },
];
</script>
