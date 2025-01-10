import { createRouter, createWebHistory } from 'vue-router'
import StartOrdering from '@/components/StartOrdering.vue'
import soupBase from '@/components/soupBase.vue'
import login from '@/components/login.vue'
import register from '@/components/register.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ],
})

export default router
