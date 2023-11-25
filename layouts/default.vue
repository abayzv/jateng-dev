<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <Container class="py-10">
        <slot />
      </Container>
    </main>
    <Footer />
  </div>
</template>
