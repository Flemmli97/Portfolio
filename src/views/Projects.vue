<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from 'vue'
import { github, projects } from '@/lib/data'
import { Size, type ProjectEntry } from '@/lib/types'
import Project from '@/components/ui/Project.vue'
import ProjectModal from '@/components/element/ProjectModal.vue'
import TagSelector from '@/components/element/TagSelector.vue'
import Link from '@/components/element/Link.vue'
import Icon from '@/components/element/Icon.vue'
import { getProjectEntries } from '@/lib/storage/projectData'

const entries: Ref<ProjectEntry[] | null> = ref(null)

const allTags = computed(() => new Set(projects.map((p) => p.tags).flat()))

const filters = ref<Set<string>>(new Set())
const selected: Ref<ProjectEntry | undefined> = ref(undefined)

onMounted(async () => {
  entries.value = await getProjectEntries()
})
</script>

<template>
  <div class="content">
    <div class="content-header">
      <div class="content-header-main">
        <div class="description">
          <h1 class="title">Projects</h1>
          <p>
            Here you can find a non-exhaustive list of various projects from me. For more check out
            my
            <Link :href="github">
              github
              <Icon class="top-icon" icon="External" :size="Size.SMALL" />
            </Link>
            instead
          </p>
        </div>
        <TagSelector
          :tags="allTags"
          :selected="filters"
          @remove="(tag) => filters.delete(tag)"
          @add="(tag) => filters.add(tag)"
        />
      </div>
      <div class="fade" />
    </div>
    <div class="project-entries">
      <template v-if="entries">
        <template v-for="entry in entries" v-bind:key="entry.project.name">
          <Project
            v-if="[...filters].every((s) => entry.project.tags.includes(s))"
            :entry="entry"
            :click="
              () => {
                selected = entry
              }
            "
          />
        </template>
      </template>
    </div>
  </div>
  <ProjectModal v-if="selected" :entry="selected" :close="() => (selected = undefined)" />
</template>

<style scoped>
.content {
  padding-top: 0;
}

.content-header {
  position: sticky;
  top: var(--navbar-height);
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  .title {
    margin: var(--margin-less);
    font-weight: bold;
  }
  pointer-events: none;
}

.content-header-main {
  width: 100%;
  padding-top: var(--padding);
  background-color: var(--color-background);
  pointer-events: auto;
  padding: var(--padding);
}

.description {
  margin-bottom: var(--margin);
  a {
    text-decoration: underline;
    display: inline-flex;
  }
  .top-icon {
    align-self: self-start;
  }
}

.fade {
  width: 100%;
  height: var(--padding-more);
  background-color: transparent;
  background: linear-gradient(var(--color-background) 0%, transparent 100%);
  pointer-events: none;
}

.project-entries {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--gap);
  margin: var(--margin-less);
}
</style>
