import { createRouter, createWebHistory } from 'vue-router'
import StartOrdering from '@/components/StartOrdering.vue'
import soup from '@/components/soup.vue'
import ingredients from '@/components/ingredients.vue'
import login from '@/components/login.vue'
import register from '@/components/register.vue'
import payment from '@/components/payment.vue'
import success from '@/components/success.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StartOrdering',
      component: StartOrdering,
    },
    {
      path: '/soup',
      name: 'soup',
      component: soup
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      component: ingredients
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/success',
      name: 'success',
      component: success
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
