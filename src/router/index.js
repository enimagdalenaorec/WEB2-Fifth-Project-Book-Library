import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/favorites',
      name: 'favorites',
      // lazy loading
      component: () => import('../views/FavoritesView.vue')
    },
    {
      path: '/book/:id', // :id je dinamički parametar
      name: 'book-details',
      component: () => import('../views/BookDetailsView.vue') // Lazy loading
    },
    // catch-all 404 stranica
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

export default router