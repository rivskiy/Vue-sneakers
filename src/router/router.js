import { createRouter, createWebHashHistory } from 'vue-router'
import Catalog from '@/pages/TheCatalog'
import Favorites from '@/pages/TheFavorites'
import Orders from '@/pages/TheOrders'
import NotFound from '@/pages/TheNotFound'

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
