import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'first',
      component: HomeView,
    },
    {
      path: '/second-page',
      name: 'second',
      component: () => import('../views/SecondPage.vue'),
    },
  ],
})

export default router
