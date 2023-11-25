<template>
  <ul class="flex items-center mb-10 opacity-70 flex-wrap">
    <li class="flex items-center">
      <nuxt-link to="/" class="hover:text-primary-500 flex items-center">
        <UIcon name="i-heroicons-home" class="inline mr-2" />
        Home
      </nuxt-link>
      <UIcon name="i-heroicons-chevron-right" class="inline mx-2" />
    </li>
    <li
      v-for="(route, index) in props.routes"
      :key="index"
      class="flex items-center"
    >
      <nuxt-link
        :to="`/${renderLink(props.routes, index)}`"
        class="hover:text-primary-500"
      >
        {{ titleCase(route) }}
      </nuxt-link>

      <UIcon
        v-if="index !== props.routes.length - 1"
        name="i-heroicons-chevron-right"
        class="inline mx-2"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps({
  routes: {
    type: Array as PropType<string[]>,
    required: true,
  },
});

const titleCase = (str: string) => {
  return str
    .toLowerCase()
    .split("-")
    .map((word) => word.replace(word[0], word[0].toUpperCase()))
    .join(" ");
};

const renderLink = (routes: string[], index: number) => {
  return routes.slice(0, index + 1).join("/");
};
</script>
