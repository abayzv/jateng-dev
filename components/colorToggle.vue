<template>
  <div
    class="border border-color rounded-xl overflow-clip flex p-3 gap-5 items-center"
  >
    <UIcon name="i-heroicons-moon" />
    <UToggle v-on:update:model-value="changeColorMode" :model-value="isDark" />
    <UIcon name="i-heroicons-sun" />
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const isDark = ref(false);

onMounted(() => {
  isDark.value = colorMode.preference === "dark";
});

const changeColorMode = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
  isDark.value = colorMode.preference === "dark";
};
</script>
