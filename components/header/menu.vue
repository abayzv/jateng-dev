<template>
  <nav>
    <div v-if="props.type === 'desktop'" class="border-b border-color">
      <Container>
        <div class="flex items-center">
          <ul class="flex gap-10" ref="ul">
            <template v-for="(item, index) in menu">
              <li
                v-if="!item.children"
                class="hover:text-primary-500 py-3 border-b-4 border-b-transparent hover:border-b-primary-500 uppercase tracking-wider"
              >
                <nuxt-link :to="item.link" class="opacity-70 text-sm">{{
                  item.name
                }}</nuxt-link>
              </li>

              <li
                v-else
                class="relative py-3 flex items-center"
                v-on:click="showChildren(index)"
                v-on-click-outside="(e) => hideChildren(e)"
              >
                <div
                  class="flex items-center gap-2 cursor-pointer uppercase tracking-wider opacity-70 text-sm"
                >
                  {{ item.name }}
                  <UIcon
                    name="i-heroicons-chevron-down"
                    :class="`inline-block ml-1 ${
                      showChildrenIndex === index ? 'transform rotate-180' : ''
                    }`"
                  />
                </div>

                <ul
                  v-if="!isMegaMenu(item.children)"
                  v-show="showChildrenIndex === index"
                  class="bg-white dark:bg-slate-900 p-5 rounded min-w-[16rem] absolute top-full -left-[50%] mt-2 flex-col gap-5 flex drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] transform -translate-x-[20%] z-50"
                >
                  <!-- trianle -->
                  <div
                    class="absolute top-[-0.5rem] left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-900 w-4 h-4 rotate-45"
                  ></div>
                  <template v-for="child in item.children">
                    <li v-if="!child.children" class="hover:text-primary-500">
                      <nuxt-link :to="child.link">{{ child.name }}</nuxt-link>
                    </li>
                  </template>
                </ul>

                <ul
                  v-else
                  v-show="showChildrenIndex === index"
                  class="bg-white dark:bg-slate-900 p-5 rounded min-w-[32rem] absolute top-full -left-[100%] mt-2 gap-5 flex drop-shadow-[0_0_5px_rgba(0,0,0,0.25)] transform translate-x-[-20%] z-50"
                >
                  <div
                    class="absolute top-[-0.5rem] left-1/2 transform -translate-x-1/2 bg-white dark:bg-slate-900 w-4 h-4 rotate-45"
                  ></div>
                  <template v-for="child in item.children">
                    <li class="font-bold w-full">
                      <nuxt-link
                        :to="child.link"
                        class="bg-gray-200 rounded w-full p-2 inline-block"
                        >{{ child.name }}</nuxt-link
                      >

                      <ul v-if="child.children" class="p-2 flex flex-col gap-2">
                        <template v-for="grandChild in child.children">
                          <li
                            class="font-normal hover:text-primary-500"
                            v-on:click="
                              () => {
                                console.log('clicked');
                              }
                            "
                          >
                            <nuxt-link :to="grandChild.link">{{
                              grandChild.name
                            }}</nuxt-link>
                          </li>
                        </template>
                      </ul>
                    </li>
                  </template>
                </ul>
              </li>
            </template>
          </ul>

          <!-- <div class="ml-auto flex items-center gap-5">
            <div>MASUK</div>
            <UButton color="primary" variant="outline" class="p-2"
              >DAFTAR</UButton
            >
          </div> -->
        </div>
      </Container>
    </div>

    <!-- Mobile View -->
    <div v-else>
      <ul class="flex flex-col">
        <template v-for="(item, index) in menu">
          <li v-if="!item.children">
            <nuxt-link :to="item.link" class="inline-block w-full p-2">{{
              item.name
            }}</nuxt-link>
          </li>

          <li v-else v-on:click="showChildren(index)">
            <div
              class="flex items-center gap-2 cursor-pointer justify-between p-2"
            >
              {{ item.name }}
              <UIcon
                name="i-heroicons-chevron-down"
                :class="`inline-block ml-1 ${
                  showChildrenIndex === index ? 'transform rotate-180' : ''
                }`"
              />
            </div>

            <ul
              v-show="showChildrenIndex === index"
              class="pl-5 p-2 flex flex-col gap-2"
            >
              <li v-for="child in item.children">
                <nuxt-link :to="child.link" class="inline-block w-full p-1">{{
                  child.name
                }}</nuxt-link>
              </li>
            </ul>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components";

const props = defineProps({
  type: {
    type: String,
    default: "desktop",
  },
});

const showChildrenIndex = ref<number | null>(null);

const showChildren = (index: number) => {
  console.log(index);
  showChildrenIndex.value = index === showChildrenIndex.value ? null : index;
};

const hideChildren = (e: any) => {
  if (
    e.target.classList.contains("cursor-pointer") ||
    e.target.classList.contains("i-heroicons-chevron-down")
  )
    return;

  showChildrenIndex.value = null;
};

interface Menu {
  name: string;
  link: string;
  children?: Menu[];
}

const menu: Array<Menu> = [
  {
    name: "Berita",
    link: "/berita",
  },
  {
    name: "Tutorial",
    link: "/tutorial",
    children: [
      {
        name: "Laravel",
        link: "/tutorial/laravel",
      },
      {
        name: "Vue",
        link: "/tutorial/vue",
      },
      {
        name: "React Js",
        link: "/tutorial/react-js",
      },
      {
        name: "React Native",
        link: "/tutorial/react-native",
      },
    ],
  },
  {
    name: "Event",
    link: "/event",
  },
  {
    name: "Tentang Kami",
    link: "/tentang-kami",
  },
  {
    name: "Kontak",
    link: "/kontak",
  },
  {
    name: "Jobs",
    link: "/jobs",
  },
];

const isMegaMenu = (menu: any) => {
  return menu.some((item: any) => item.children);
};
</script>
