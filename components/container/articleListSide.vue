<template>
  <div>
    <h2 class="text-lg font-bold py-5 border-b border-color mb-5">
      {{ props.title }}
    </h2>
    <div class="flex flex-col gap-2">
      <ArticleSide
        v-for="article in articles"
        :key="article.id"
        :article="article"
      />
    </div>
    <div>
      <UButton
        color="primary"
        variant="solid"
        size="xl"
        class="mt-5 w-full flex justify-center"
        trailing-icon="i-heroicons-arrow-right-circle"
      >
        Baca {{ props.title }} Lainnya
      </UButton>
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
    title: "Lorem ipsum dolor sit amet, consectetur .",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci.",
    image: `https://picsum.photos/seed/${randomNumber[0]}/200/150`,
    category: "CONS",
    id: 1,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci.",
    image: `https://picsum.photos/seed/${randomNumber[1]}/200/150`,
    category: "CONS",
    id: 2,
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur .",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci.",
    image: `https://picsum.photos/seed/${randomNumber[2]}/200/150`,
    category: "CONS",
    id: 3,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci.",
    image: `https://picsum.photos/seed/${randomNumber[3]}/200/150`,
    category: "CONS",
    id: 4,
  },
  {
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptate architecto pariatur, temporibus numquam porro officiis optio quibusdam adipisci.",
    image: `https://picsum.photos/seed/${randomNumber[4]}/200/150`,
    category: "CONS",
    id: 5,
  },
];
</script>
