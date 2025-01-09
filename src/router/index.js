import { createRouter, createWebHistory } from 'vue-router'
import StartOrdering from '@/components/StartOrdering.vue'
import soupBase from '@/components/soupBase.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StartOrdering',
      component: StartOrdering,
    },
    {
      path: '/soup-base',
      name: 'soup-base',
      component: soupBase
    }
  ],
})

export default router
