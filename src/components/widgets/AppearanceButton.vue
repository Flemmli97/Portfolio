<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import Icon from '@/components/element/Icon.vue'
import { Size } from '@/lib/types'

const isDark = useDark({ disableTransition: false })
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="appearance-button desktop-view"
    @click="toggleDark()"
    ariaLabel="Toggle appearance"
  >
    <span class="selection-indicator" :class="{ right: !isDark }" aria-hidden="true" />
    <Icon icon="DarkMode" class="icon-appearance" :class="{ active: isDark }" :size="Size.LARGE" />
    <Icon
      icon="LightMode"
      class="icon-appearance"
      :class="{ active: !isDark }"
      :size="Size.LARGE"
    />
  </button>
  <button class="appearance-button mobile-view" @click="toggleDark()" ariaLabel="Toggle appearance">
    <Icon icon="DarkMode" v-if="isDark" class="icon-appearance active" :size="Size.LARGE" />
    <Icon icon="LightMode" v-if="!isDark" class="icon-appearance active" :size="Size.LARGE" />
  </button>
</template>

<style scoped>
.appearance-button {
  display: inline-flex;
  position: relative;
  padding: var(--padding-lesser);
  background-color: var(--color-background-alt);
  border-radius: var(--border-radius-more);
  border: none;
  cursor: pointer;
  &.mobile-view {
    background-color: var(--color-background);
    &:hover {
      background-color: var(--color-background-lighter);
    }
  }
}

.icon-appearance {
  opacity: 0.5;
  color: var(--color-text);
  z-index: 1;
  &.active {
    opacity: 1;
  }
}

.selection-indicator {
  position: absolute;
  width: var(--icon-size-large);
  height: var(--icon-size-large);
  border-radius: 50%;
  background-color: color-mix(in srgb, var(--color-background-alt), var(--color-primary) 75%);
  &.right {
    transform: translateX(var(--icon-size-large));
  }
  transition: transform 200ms ease-in-out;
}
</style>
