<script setup lang="ts">
import Icon from '@/components/element/Icon.vue'
import Link from '@/components/element/Link.vue'
import { github } from '@/lib/data'
import { Size } from '@/lib/types'
</script>

<template>
  <div class="footer">
    <div class="copyright">© 2026 Flemmli97. All rights reserved.</div>
    <div class="links">
      <Link class="link" :href="github">
        <Icon icon="simple-icons:github" :size="Size.LARGE" />
      </Link>
      <Link class="link" href="https://www.curseforge.com/members/flemmli97/projects">
        <Icon icon="simple-icons:curseforge" :size="Size.LARGE" />
      </Link>
      <Link class="link" href="https://modrinth.com/user/flemmli97">
        <Icon icon="simple-icons:modrinth" :size="Size.LARGE" />
      </Link>
      <Link class="link" href="https://discord.gg/8Cx26tfWNs">
        <Icon icon="simple-icons:discord" :size="Size.LARGE" />
      </Link>
      <Link class="link" href="https://www.youtube.com/@flemmli97">
        <Icon icon="simple-icons:youtube" :size="Size.LARGE" />
      </Link>
      <Link class="link" href="https://www.twitch.tv/flemmli97">
        <Icon icon="simple-icons:twitch" :size="Size.LARGE" />
      </Link>
    </div>
  </div>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: var(--margin);
  margin-right: var(--margin);
  padding: var(--padding) var(--padding-less);
}

.links {
  display: inline-flex;
  gap: var(--gap);
}

.link {
  display: flex;
  &:hover {
    color: var(--color-primary);
  }
}
</style>
