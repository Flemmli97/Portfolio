<script setup lang="ts">
import NavBar from '@/components/ui/NavBar.vue'
import Footer from '@/components/ui/Footer.vue'
</script>

<template>
  <header>
    <NavBar />
  </header>
  <div class="content-root">
    <RouterView />
  </div>
  <footer>
    <Footer />
  </footer>
</template>

<style scoped>
.content-root {
  margin: auto;
  padding-top: var(--navbar-height);
  width: var(--content-width);
  min-height: 90vh;
}

header {
  position: fixed;
  inset-inline: 0;
  display: inline-flex;
  width: var(--content-width);
  margin: auto;
  z-index: 500;
}

footer {
  width: var(--content-width);
  margin: auto;
}
</style>
