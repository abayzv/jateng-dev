<template>
  <div>
    <h2 class="text-xl font-bold py-5 border-b border-color mb-5">
      {{ props.title }}
    </h2>
    <div class="flex flex-col gap-5">
      <ArticleHome
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Article } from "../articleCard.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "Lorem ipsum dolor sit amet",
  },
});

const generateRandomNumber = () => {
  // return array of random numbers
  const randomNumbers = [];
  for (let i = 0; i <= 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }

  return randomNumbers;
};
const randomNumber = generateRandomNumber();

const articles: Article[] = [
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci. Tempore voluptates, sint nam at nisi recusandae nostrum fugiat temporibus ab.",
    image: `https://picsum.photos/seed/${randomNumber[0]}/400/300`,
    category: "CONS",
    id: 1,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci. Tempore voluptates, sint nam at nisi recusandae nostrum fugiat temporibus ab.",
    image: `https://picsum.photos/seed/${randomNumber[1]}/400/300`,
    category: "CONS",
    id: 2,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci. Tempore voluptates, sint nam at nisi recusandae nostrum fugiat temporibus ab.",
    image: `https://picsum.photos/seed/${randomNumber[2]}/400/300`,
    category: "CONS",
    id: 3,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci. Tempore voluptates, sint nam at nisi recusandae nostrum fugiat temporibus ab.",
    image: `https://picsum.photos/seed/${randomNumber[3]}/400/300`,
    category: "CONS",
    id: 4,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci. Tempore voluptates, sint nam at nisi recusandae nostrum fugiat temporibus ab.",
    image: `https://picsum.photos/seed/${randomNumber[4]}/400/300`,
    category: "CONS",
    id: 5,
  },
];
</script>
