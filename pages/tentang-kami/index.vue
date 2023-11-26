<template>
  <div class="bg-slate-50">
    <Container class="py-16">
      <div class="px-16">
        <h3 class="mb-5">
          <span class="border-b border-primary-500">ABOUT US</span>
        </h3>
        <h1 class="text-5xl font-black mb-5">
          Apa itu Jateng<span class="text-primary-500">Dev</span>?
        </h1>
        <p class="text-lg opacity-70">
          JatengDev adalah platform yang berisi komunitas developer di wilayah
          Jawa Tengah. Kami adalah tempat bagi para developer yang ingin
          belajar, berbagi, dan berkembang bersama. Kami memiliki visi untuk
          meningkatkan kualitas dan kuantitas developer di Jawa Tengah, serta
          memberikan kontribusi positif bagi masyarakat dan dunia.
        </p>

        <p class="text-lg opacity-70 mt-5">
          JatengDev terbuka untuk siapa saja yang tertarik dengan dunia
          pengembangan software, baik yang sudah profesional maupun yang masih
          pemula. Kami juga menyambut developer dari berbagai latar belakang,
          bidang, dan bahasa pemrograman. JatengDev adalah komunitas yang
          inklusif, ramah, dan saling mendukung.
        </p>
      </div>
    </Container>
  </div>

  <div>
    <Container class="py-16">
      <div class="px-16">
        <h3 class="mb-5">
          <span class="border-b border-primary-500">SERVICE</span>
        </h3>
        <h2 class="text-3xl font-black mb-5">
          Apa saja yang bisa di lakukan di Jateng<span class="text-primary-500"
            >Dev</span
          >?
        </h2>
        <p class="text-lg opacity-70">
          JatengDev menyediakan berbagai fasilitas dan kegiatan yang dapat
          membantu Anda dalam belajar dan berkarir sebagai developer, seperti:
        </p>
        <ul class="grid grid-cols-4 gap-5 mt-5">
          <li
            v-for="service in services"
            class="border border-color p-5 rounded"
          >
            <div class="mb-2">
              <Icon :name="service.icon" class="text-primary-500" />
            </div>
            <h4 class="font-bold text-xl mb-2">{{ service.title }}</h4>
            <p class="opacity-70">
              {{ service.description }}
            </p>
          </li>
        </ul>
      </div>
    </Container>
  </div>

  <div class="bg-slate-50">
    <Container class="py-16">
      <div class="px-16">
        <h3 class="mb-5">
          <span class="border-b border-primary-500">JOIN US</span>
        </h3>
        <h1 class="text-3xl font-black mb-5">
          Bagaimana cara bergabung dengan Jateng<span class="text-primary-500"
            >Dev</span
          >?
        </h1>
        <p class="text-lg opacity-70">
          Untuk bergabung dengan JatengDev, Anda hanya perlu mendaftar di
          website kami dengan mengisi data diri dan minat Anda. Setelah itu,
          Anda dapat mengakses semua fasilitas dan kegiatan yang kami sediakan.
          Anda juga dapat mengikuti akun media sosial kami untuk mendapatkan
          informasi terbaru tentang JatengDev.
        </p>
        <p class="text-lg opacity-70 mt-5">
          Jadi, tunggu apa lagi? Segera bergabung dengan JatengDev dan rasakan
          sendiri keuntungan dan kegembiraannya. JatengDev, platform komunitas
          developer di wilayah Jawa Tengah!
        </p>
        <div>
          <UButton
            size="xl"
            color="primary"
            variant="solid"
            class="mt-5"
            to="/daftar"
            >DAFTAR SEKARANG</UButton
          >
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "full",
});

const services = [
  {
    icon: "ant-design:message-filled",
    title: "Forum",
    description:
      "Anda dapat bertanya, menjawab, atau berdiskusi tentang topik-topik seputar pengembangan software.",
  },
  {
    icon: "ant-design:wechat-filled",
    title: "Grup Chat",
    description:
      "Berinteraksi dengan developer lain secara real-time, baik untuk sekedar ngobrol, berbagi informasi, atau membantu masalah.",
  },
  {
    icon: "ant-design:read-filled",
    title: "Blog",
    description:
      "Anda dapat menulis atau membaca artikel-artikel menarik tentang pengembangan software, baik yang bersifat teknis, inspiratif, maupun edukatif.",
  },
  {
    icon: "ant-design:calendar-filled",
    title: "Event",
    description:
      "Bertemu dan berjejaring dengan developer lain secara langsung, baik melalui workshop, seminar, meetup, hackathon, atau acara lainnya.",
  },
];
</script>
