<script setup lang="ts">
import Icon from '@/components/element/Icon.vue'
import { skills } from '@/lib/data'
import { Size, type Skill } from '@/lib/types'

function canScroll(skills: Skill[]) {
  return skills.length > 5
}
</script>

<template>
  <div class="content">
    <div class="description">
      <h1 class="title">Tech Stack</h1>
      <p>A list of various tech stacks I've so far worked with</p>
    </div>
    <template v-for="entry in Object.entries(skills)" v-bind:key="entry[0]">
      <template v-if="entry[1].length > 0">
        <div class="category-container">
          <template v-if="entry[1].length > 0">
            <template v-if="canScroll(entry[1])">
              <div class="fade left" />
              <div class="fade right" />
            </template>
            <h1 class="category">{{ entry[0] }}</h1>
            <div class="skills-container-root">
              <div class="skills-container" :class="{ animate: canScroll(entry[1]) }">
                <template v-for="skills in entry[1]" v-bind:key="skills.name">
                  <div class="skill-entry">
                    <Icon :icon="skills.icon" :size="Size.LARGEST" />
                    <p class="skill">{{ skills.name }}</p>
                  </div>
                </template>
              </div>
              <div v-if="canScroll(entry[1])" class="skills-container animate">
                <template v-for="skills in entry[1]" v-bind:key="skills.name">
                  <div class="skill-entry">
                    <Icon :icon="skills.icon" :size="Size.LARGEST" />
                    <p class="skill">{{ skills.name }}</p>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </div>
      </template>
    </template>
  </div>
</template>

<style scoped>
.description {
  text-align: center;
}

.title {
  font-weight: bold;
  margin: var(--margin-less);
}

.category-container {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: var(--margin-more);
  padding: var(--padding-more);
  background-color: var(--color-background-alt);
  border-radius: var(--border-radius);
  border: 1px solid var(--color-primary);
  text-align: center;
  width: calc(100% - 2rem);
  overflow: hidden;
}

.fade {
  position: absolute;
  height: 100%;
  width: var(--padding-more);
  top: 0;
  z-index: 1;
  &.left {
    left: var(--padding-more);
    background: linear-gradient(90deg, var(--color-background-alt) 0%, transparent 100%);
  }
  &.right {
    right: var(--padding-more);
    background: linear-gradient(-90deg, var(--color-background-alt) 0%, transparent 100%);
  }
}

.category {
  font-weight: bold;
}

.skills-container-root {
  display: inline-flex;
  overflow: hidden;
  gap: var(--gap-more);
  margin-top: var(--margin-more);

  &:hover {
    .skills-container {
      animation-play-state: paused;
    }
  }
}

.skills-container {
  display: flex;
  flex-direction: row;
  gap: var(--gap-more);
  font-size: 1.5rem;
  &.animate {
    animation: marquee 30s linear infinite;
  }
}

.skill-entry {
  display: inline-flex;
  align-items: center;
  gap: var(--gap-less);
}

@keyframes marquee {
  from {
    transform: translate(0);
  }

  to {
    transform: translateX(calc(-100% - calc(2 * var(--gap-more))));
  }
}
</style>
