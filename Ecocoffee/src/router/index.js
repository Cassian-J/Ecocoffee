import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@views/HomePage.vue'
import ProductPage from '@views/ProductPage.vue'

const routes = [
  { path: '/', name: 'Accueil', component: HomePage },
  { path: '/produits', name: 'Nos produits', component: ProductPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
