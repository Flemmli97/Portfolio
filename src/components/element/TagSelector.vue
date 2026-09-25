<script setup lang="ts">
import Button from '@/components/widgets/Button.vue'

defineEmits<{
  add: [tag: string]
  remove: [tag: string]
}>()

defineProps<{
  tags: Set<string>
  selected: Set<string>
}>()
</script>

<template>
  <div class="selector">
    <template v-for="tag in tags" v-bind:key="tag">
      <Button
        class="tag"
        :text="tag"
        :class="{ selected: selected.has(tag) }"
        :onClick="
          () => {
            if (selected.has(tag)) {
              $emit('remove', tag)
            } else {
              $emit('add', tag)
            }
          }
        "
      />
    </template>
  </div>
</template>

<style scoped>
.selector {
  display: inline-flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: var(--gap-less);
}

.tag {
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-more);
  &:hover {
    background-color: var(--color-background-lighter);
  }
  &.selected {
    border-color: var(--color-primary-alt);
    background-color: var(--color-background-alt);
    &:hover {
      background-color: var(--color-background-alt-lighter);
    }
  }
}
</style>
