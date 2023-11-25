<template>
  <header>
    <div class="border-b border-color py-5 z-50">
      <Container class="flex items-center gap-10">
        <!-- Hamburger -->
        <div class="block lg:hidden">
          <UButton
            color="white"
            variant="solid"
            icon="i-heroicons-bars-3"
            class="p-2"
            v-on:click="isShowMobileMenu = true"
          />
        </div>

        <!-- Header Title -->
        <nuxt-link to="/" class="text-2xl font-bold mx-auto lg:ml-0">
          JATENG<span class="text-primary-500 font-black">DEV</span>
          <div class="logo"></div>
        </nuxt-link>
        <!-- End Header Title -->

        <!-- Header Search -->
        <div class="w-2/4 ml-5 hidden lg:inline-block">
          <UInput v-model="search" size="xl" placeholder="Cari Sesuatu">
            <template #trailing>
              <UIcon
                name="i-heroicons-magnifying-glass"
                class="text-gray-400"
              />
            </template>
          </UInput>
        </div>
        <!-- End Header Search -->

        <div class="ml-auto hidden lg:block">
          <ColorToggle />
        </div>

        <!-- Avatar -->
        <div>
          <UAvatar
            src="https://avatars.githubusercontent.com/u/739984?v=4"
            alt="Avatar"
            class="lg:hidden"
            size="md"
          />
          <div class="lg:flex hidden items-center gap-5">
            <div>MASUK</div>
            <UButton color="primary" variant="outline" class="p-2"
              >DAFTAR</UButton
            >
          </div>
        </div>
        <!-- End Avatar -->
      </Container>
    </div>
    <HeaderMenu class="hidden lg:block" />

    <!-- Mobile Menu -->
    <USlideover
      v-model="isShowMobileMenu"
      side="left"
      class="w-2/3"
      v-on-click-outside="hideMobileMenu"
    >
      <div class="p-5 flex flex-col gap-5">
        <nuxt-link to="/">
          <UButton icon="i-heroicons-home" size="xl" class="w-full">
            Home
          </UButton></nuxt-link
        >
        <HeaderMenu type="mobile" />
      </div>
    </USlideover>
  </header>
</template>

<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components";

const search = ref("");
const isShowMobileMenu = ref(false);

const hideMobileMenu = () => {
  isShowMobileMenu.value = false;
};
</script>
