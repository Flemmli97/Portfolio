<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>

<template>
  <a class="link" :href="href" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>

<style scoped>
.link {
  color: var(--color-text);
  text-decoration: none;
  cursor: pointer;
}
</style>
