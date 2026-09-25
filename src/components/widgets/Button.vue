<script setup lang="ts">
defineProps<{
  text?: string
  disabled?: boolean
  href?: string
  onClick?: () => void
}>()
</script>

<template>
  <button
    class="button"
    :disabled="disabled"
    @click="
      (_) => {
        onClick && onClick()
      }
    "
  >
    {{ text ? text : '' }}
    <a v-if="href" :href="href" target="_blank" />
    <slot />
  </button>
</template>

<style scoped>
.button {
  background-color: var(--color-background);
  color: var(--color-text);
  border: none;
  padding: var(--padding-less) var(--padding);
  cursor: pointer;
  &:hover {
    background-color: var(--color-background-lighter);
  }
}
</style>
