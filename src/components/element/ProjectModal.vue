<script setup lang="ts">
import { LinkTypeNames, Size, type LinkType, type ProjectEntry } from '@/lib/types'
import { computed, onBeforeUnmount, onMounted, ref, type ComputedRef } from 'vue'
import Icon from '@/components/element/Icon.vue'
import Link from '@/components/element/Link.vue'
import MarkdownIt from 'markdown-it'
import dedent from 'dedent'

interface LinkData {
  icon: string
  name: string
  urls: string[]
}

const props = defineProps<{
  entry: ProjectEntry
  close: () => void
}>()

const previousBodyOverflow = ref('')

onMounted(() => {
  previousBodyOverflow.value = document.body.style.overflow
  document.body.style.overflow = 'hidden'
})

onBeforeUnmount(() => {
  document.body.style.overflow = previousBodyOverflow.value
})

const projectLinks: ComputedRef<LinkData[]> = computed(() => {
  const data: LinkData[] = []
  const urls: Record<string, string[]> = {}
  props.entry.project.hrefs.forEach((href) => {
    ;(urls[href.type] ??= []).push(href.url)
  }, {})
  Object.entries(urls).forEach((entry) => {
    data.push({
      name: LinkTypeNames[entry[0] as LinkType][0],
      icon: LinkTypeNames[entry[0] as LinkType][1],
      urls: entry[1],
    })
  })
  return data
})

const descriptionContent = computed(() => {
  if (!props.entry.project.description) {
    return undefined
  }
  const md = new MarkdownIt()
  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    tokens[idx]?.attrSet('target', '_blank')
    tokens[idx]?.attrSet('rel', 'noopener noreferrer')
    return self.renderToken(tokens, idx, options)
  }
  return md.render(dedent(props.entry.project.description))
})

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

function iconFromType(type: string) {
  switch (type) {
    case 'curseforge':
      return 'simple-icons:curseforge'
    case 'modrinth':
      return 'simple-icons:modrinth'
    default:
      return undefined
  }
}
</script>

<template>
  <div class="modal-view modal" @click.self="close">
    <div class="modal-content">
      <div class="project-content">
        <img v-if="entry.project.banner" class="banner" :src="entry.project.banner" />
        <div class="title-container">
          <Icon v-if="entry.project.icon" :icon="entry.project.icon" :size="Size.LARGER" />
          <h1 class="project-title">{{ entry.project.name }}</h1>
        </div>
        <div class="tags">
          <p>Tags:</p>
          <template v-for="tag in entry.project.tags" v-bind:key="tag">
            <div class="tag">
              {{ tag }}
            </div>
          </template>
        </div>
        <div v-if="projectLinks" class="hrefs">
          <template v-for="href in projectLinks" v-bind:key="href.name">
            <div class="url-container">
              <div class="url-title">
                <Icon :icon="href.icon" />
                <p>{{ href.name }}:</p>
              </div>
              <div class="urls">
                <template v-for="url in href.urls" v-bind:key="url">
                  <Link :href="url">{{ url }}</Link></template
                >
              </div>
            </div>
          </template>
        </div>
        <div
          v-if="descriptionContent"
          class="markdown project-description"
          v-html="descriptionContent"
        />
        <p v-if="!descriptionContent" class="project-description">{{ entry.project.summary }}</p>
        <template v-if="entry.stars !== undefined">
          <p class="github-stars">
            <Icon icon="Star" />
            {{ formatNumber(entry.stars) }}
          </p>
        </template>
        <div class="downloads">
          <template v-for="(downloads, type) in entry.downloads" v-bind:key="type">
            <template v-if="iconFromType(type)"></template>
            <p class="iconed-txt">
              <Icon :icon="iconFromType(type)!" />
              {{ formatNumber(downloads) }}
            </p>
          </template>
          <template v-if="entry.downloadsTotal">
            <p class="iconed-txt">
              <Icon icon="Download" />
              {{ formatNumber(entry.downloadsTotal) }}
            </p>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  background-color: rgba(1, 1, 1, 0.5);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.modal-content {
  position: relative;
  background-color: var(--color-background-alt);
  padding: var(--padding);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius);
  width: 70vw;
  max-width: 45rem;
}

.project-content {
  display: flex;
  flex-direction: column;
  gap: var(--gap-less);
}

.banner {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  object-position: top;
}

.title-container {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-less);
}

.github-stars {
  display: flex;
  align-items: center;
  position: absolute;
  top: var(--padding);
  right: var(--padding);
}

.hrefs {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.url-container {
  display: inline-flex;
  gap: var(--gap-less);
  a {
    color: var(--color-primary);
    &:hover {
      color: var(--color-primary-lighter);
    }
  }
}

.url-title {
  display: inline-flex;
  gap: var(--gap-less);
  align-items: center;
  height: fit-content;
}

.urls {
  display: flex;
  flex-direction: column;
  overflow-wrap: anywhere;
}

.tags {
  display: inline-flex;
  gap: var(--gap-less);
  flex-wrap: wrap;
  align-items: center;
}

.tag {
  border: 1px solid var(--color-primary);
  padding: 0 var(--padding-lesser);
  border-radius: var(--border-radius);
}

.downloads {
  display: inline-flex;
  gap: var(--gap-less);
  margin-left: auto;
}
</style>
