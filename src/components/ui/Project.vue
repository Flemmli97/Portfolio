<script setup lang="ts">
import { Size, type ProjectEntry } from '@/lib/types'
import Icon from '@/components/element/Icon.vue'

defineProps<{
  entry: ProjectEntry
  click: () => void
}>()

function formatNumber(value: number): string {
  const scales = [
    { value: 1e6, suffix: 'M' },
    { value: 1e3, suffix: 'K' },
  ]

  for (const { value: scale, suffix } of scales) {
    if (value >= scale) {
      const mult = value / scale
      const decimals = mult >= 100 ? 0 : mult >= 10 ? 1 : 2
      return `${mult.toFixed(decimals)}${suffix}`
    }
  }
  return String(value)
}
</script>

<template>
  <div class="project-entry" @click="click">
    <div class="title-container">
      <Icon v-if="entry.project.icon" :icon="entry.project.icon" :size="Size.LARGER" />
      <h2 class="project-title">{{ entry.project.name }}</h2>
      <template v-if="entry.stars !== undefined">
        <p class="github-stars">
          <Icon icon="Star" />
          {{ formatNumber(entry.stars) }}
        </p>
      </template>
    </div>
    <p class="project-description">{{ entry.project.summary }}</p>
    <div class="meta">
      <div class="tags">
        <template v-for="tag in entry.project.tags.slice(0, 3)" v-bind:key="tag">
          <div class="tag">
            {{ tag }}
          </div>
        </template>
      </div>
      <div class="downloads">
        <template v-if="entry.downloadsTotal">
          <p class="iconed-txt">
            <Icon icon="Download" />
            {{ formatNumber(entry.downloadsTotal) }}
          </p>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-entry {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: var(--padding);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius);
  background-color: var(--color-background-alt);
  position: relative;
  width: fit-content;
  max-width: 350px;
  cursor: pointer;
  &:hover {
    background-color: var(--color-background-alt-lighter);
    transform: scale(1.05);
  }
  transition: transform 200ms;
}

.title-container {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-less);
  .icon {
    align-self: flex-start;
  }
}

.project-title {
  font-weight: bold;
}

.project-description {
  margin-bottom: var(--padding-more);
  flex: 1;
}

.github-stars {
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: auto;
  top: var(--padding);
  right: var(--padding);
}

.meta {
  display: inline-flex;
  align-items: center;
  margin-top: auto;
  inset-inline: 1rem;
}

.downloads {
  margin-left: auto;
  display: flex;
  gap: var(--gap-less);
}

.tags {
  display: inline-flex;
  gap: var(--gap-less);
  flex-wrap: wrap;
  margin-right: var(--margin);
}

.tag {
  border: 1px solid var(--color-primary);
  padding: var(--padding-lesser) var(--padding-less);
  border-radius: var(--border-radius-more);
}

.iconed-txt {
  display: flex;
  align-items: center;
  gap: var(--gap-lesser);
}
</style>
