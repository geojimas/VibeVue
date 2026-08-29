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
      // meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/SecondPage.vue'),
      // meta: { requiresAuth: true },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/PageNotFound.vue'),
      meta: { hideLayout: true },
    },
  ],
})

router.beforeEach((to) => {
  const { setLoading } = useLoadingStore()
  setLoading(true)

  if (to.meta.requiresAuth) {
    // Add auth redirect logic here when you need protected routes.
    return false
  }

  return true
})

router.afterEach((_to, _from) => {
  const { setLoading } = useLoadingStore()
  setLoading(false)
})

export default router
