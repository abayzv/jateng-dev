<template>
  <footer>
    <div class="py-10 min-h-[2rem] border-t border-color">
      <Container class="grid lg:grid-cols-4 lg:gap-16 gap-5">
        <!-- Menu 1 -->
        <FooterMenu title="About">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi
            maiores sint eum cupiditate totam nihil earum accusantium inventore?
          </p>
        </FooterMenu>
        <!-- End Menu 1 -->

        <!-- Menu 2 -->
        <FooterMenu title="Tutorial">
          <FooterMenuList :lists="menu1" />
        </FooterMenu>
        <!-- End Menu 2 -->

        <!-- Menu 3 -->
        <FooterMenu title="Navigasi">
          <FooterMenuList :lists="menu2" />
        </FooterMenu>
        <!-- End Menu 3 -->

        <!-- Menu 4 -->
        <FooterMenu title="Newslatter">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            nihil.
          </p>
        </FooterMenu>
        <!-- End Menu 4 -->
      </Container>
    </div>
    <Container class="border-t border-color py-3 text-center">
      <span class="text-lg">
        JATENG<span class="text-primary-500 font-black">DEV</span></span
      >
      Copyrigth &copy; 20223
    </Container>
  </footer>
</template>

<script setup lang="ts">
import type { List } from "./menuList.vue";

const menu1: List[] = [
  {
    link: "/#",
    title: "Laravel",
  },
  {
    link: "/#",
    title: "Vue Js",
  },
  {
    link: "/#",
    title: "React Js",
  },
  {
    link: "/",
    title: "Python",
  },
];

const menu2 = [
  {
    link: "/#",
    title: "Kontak",
  },
  {
    link: "/#",
    title: "Tentang Kami",
  },
  {
    link: "/#",
    title: "Bantuan",
  },
];
</script>
