import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/Projects.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('@/views/Skills.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/Missingno.vue'),
    },
  ],
})

export default router
