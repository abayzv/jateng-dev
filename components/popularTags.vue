<template>
  <div>
    <h2 class="text-lg font-bold py-5 border-b border-color mb-5">
      Tag Populer
    </h2>
    <ul class="flex gap-3 flex-wrap">
      <li v-for="(tag, index) in hashtags" :key="index">
        <span :class="`text-${randomColor()}-500`">#</span>
        {{ tag }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const randomColor = () => {
  const colors = [
    "red",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "indigo",
    "gray",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const hashtags = [
  "TravelGoals",
  "FoodieAdventure",
  "FitnessJourney",
  "TechTrends",
  "Fashionista",
  "BookWormLife",
  "MindfulnessMoment",
  "DIYProjects",
  "MotivationMonday",
  "ThrowbackThursday",
];
</script>
