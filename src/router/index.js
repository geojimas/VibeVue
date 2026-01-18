import { createRouter, createWebHistory } from 'vue-router'
import { useLoadingStore } from '../store/loader'

const router = createRouter({
  linkActiveClass: 'active-route',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/SecondPage.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/PageNotFound.vue'),
      meta: { hideLayout: true }

    }

  ],
})

router.beforeEach((_to, _from, next) => {
  const { setLoading } = useLoadingStore()
  setLoading(true)
  next()
})

router.afterEach((_to, _from, _next) => {
  const { setLoading } = useLoadingStore()
  setLoading(false)
})

export default router
