<script setup lang="ts">
import { computed, defineAsyncComponent, type Component, type ComputedRef } from 'vue'
import { Icon } from '@iconify/vue'
import { Size } from '@/lib/types'

const icons = import.meta.glob<{ default: Component }>('/src/components/icons/*.vue')
const props = defineProps<{
  icon: string
  size?: Size
}>()

enum Type {
  COMPONENT,
  ICON,
  URL,
}
const component: ComputedRef<[Component | undefined, Type]> = computed(() => {
  const loader = icons[`/src/components/icons/${props.icon}.vue`]
  if (!loader) {
    if (props.icon.startsWith('https://')) {
      return [undefined, Type.URL]
    }
    return [undefined, Type.ICON]
  }
  return [defineAsyncComponent(loader), Type.COMPONENT]
})
const size = computed(() => (!props.size ? '' : `icon-${Size[props.size].toLowerCase()}`))
</script>

<template>
  <span class="icon" :class="size" aria-hidden="true">
    <component v-if="component[0]" :is="component[0]" />
    <Icon v-if="component[1] === Type.ICON" :icon="props.icon" />
    <img v-if="component[1] === Type.URL" :src="props.icon" />
  </span>
</template>

<style scoped>
.icon {
  display: inline-flex;
  width: var(--icon-size);
  height: var(--icon-size);
  aspect-ratio: 1;
  svg {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
  }
}

.icon-small {
  width: var(--icon-size-small);
  height: var(--icon-size-small);
}

.icon-smaller {
  width: var(--icon-size-smaller);
  height: var(--icon-size-smaller);
}

.icon-large {
  width: var(--icon-size-large);
  height: var(--icon-size-large);
}

.icon-larger {
  width: var(--icon-size-larger);
  height: var(--icon-size-larger);
}

.icon-largest {
  width: var(--icon-size-largest);
  height: var(--icon-size-largest);
}
</style>
