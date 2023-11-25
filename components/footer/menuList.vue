<template>
  <ul class="flex flex-col gap-2">
    <nuxt-link v-for="list in props.lists" :to="list.link">{{
      list.title
    }}</nuxt-link>
  </ul>
</template>

<script setup lang="ts">
export interface List {
  title: string;
  link: string;
}

const props = defineProps({
  lists: {
    type: Array as PropType<List[]>,
    required: true,
  },
});
</script>
