import { createRouter, createWebHashHistory } from 'vue-router'
import Catalog from '@/pages/TheCatalogPage'
import Favorites from '@/pages/TheFavoritesPage'
import Orders from '@/pages/TheOrdersPage'
import NotFound from '@/pages/TheNotFoundPage'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: Catalog
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
  },
  {
    path: '/:CatchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
