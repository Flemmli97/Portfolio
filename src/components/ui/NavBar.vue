<script setup lang="ts">
import AppearanceButton from '@/components/widgets/AppearanceButton.vue'
import Link from '@/components/element/Link.vue'
import Icon from '@/components/element/Icon.vue'
import Button from '@/components/widgets/Button.vue'
import { Size } from '@/lib/types'
import { ref } from 'vue'
import router from '@/lib/router'

interface Route {
  name: string
  url: string
}
const dropDown = ref(false)

const routes: Route[] = router
  .getRoutes()
  .filter((r) => r.name && r.path && r.path !== '/')
  .map((r) => {
    return {
      name: capitalize(r.name!.toString()),
      url: r.path,
    }
  })

const additionalRoutes: Route[] = [
  {
    name: 'Maven',
    url: 'https://maven.blazing-coop.net',
  },
  {
    name: 'Wiki',
    url: 'https://wiki.blazing-coop.net',
  },
  {
    name: 'Paste',
    url: 'https://blazing-coop.net/paste',
  },
]

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
</script>

<template>
  <div id="navbar">
    <div id="navbar-left" class="navbar-content">
      <RouterLink class="nav-button" to="/">Home</RouterLink>
    </div>
    <div id="navbar-right" class="navbar-content">
      <template v-for="route in routes" v-bind:key="route.name">
        <RouterLink class="nav-button desktop-view" :to="route.url">{{ route.name }}</RouterLink>
      </template>
      <template v-for="routes in additionalRoutes" v-bind:key="routes.name">
        <Link class="nav-button desktop-view" :href="routes.url">
          {{ routes.name }}
          <Icon class="top-icon" icon="External" :size="Size.SMALL" />
        </Link>
      </template>
      <AppearanceButton />
      <Button class="mobile-view menu">
        <Icon icon="Menu" :size="Size.LARGE" :onClick="() => (dropDown = !dropDown)" />
      </Button>
    </div>
  </div>
  <div class="modal-view" v-if="dropDown" @click.self="() => (dropDown = false)">
    <div class="dropdown">
      <template v-for="route in routes" v-bind:key="route.name">
        <RouterLink class="dropdown-button" :to="route.url" @click="() => (dropDown = false)">
          {{ route.name }}
        </RouterLink>
      </template>
      <template v-for="route in additionalRoutes" v-bind:key="route.name">
        <Link class="dropdown-button" :href="route.url" @click="() => (dropDown = false)">
          {{ route.name }}
          <Icon icon="External" :size="Size.SMALL" />
        </Link>
      </template>
    </div>
  </div>
</template>

<style scoped>
#navbar {
  display: flex;
  border-bottom: 2px solid var(--color-primary);
  background-color: var(--color-background);
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--navbar-height);
  align-items: center;
}

.navbar-content {
  display: flex;
  align-items: center;
  height: 100%;
}

#navbar-right {
  margin-left: auto;
}

.nav-button {
  display: inline-flex;
  height: 100%;
  align-items: center;
  background: var(--color-background);
  color: var(--color-text);
  padding: var(--padding-less) var(--padding);
  text-decoration: none;
  position: relative;
  &:hover {
    background: linear-gradient(transparent 80%, var(--color-primary) 100%);
  }
  .top-icon {
    position: absolute;
    top: var(--padding-less);
    right: var(--padding-lesser);
    align-self: self-start;
  }
}

.menu {
  display: inline-flex;
  align-items: center;
  border-radius: var(--border-radius-more);
  padding: var(--padding-less);
  &:hover {
    background: var(--color-background-lighter);
  }
}

.router-link-active {
  font-weight: bold;
}

.dropdown {
  position: absolute;
  top: calc(var(--navbar-height) - 0.5rem);
  right: 0;
  background-color: var(--color-background-alt);
  border: 2px solid var(--color-primary);
  border-radius: var(--border-radius);
  display: flex;
  flex-direction: column;
  gap: var(--gap-less);
  padding: var(--padding-less);
}

.dropdown-button {
  display: inline-flex;
  color: var(--color-text);
  border-radius: var(--border-radius);
  padding: var(--padding-less) var(--padding);
  text-decoration: none;
  &:hover {
    background: var(--color-background-alt-lighter);
  }
}
</style>
