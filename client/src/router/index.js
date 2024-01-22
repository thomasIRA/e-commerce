import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import AddProductView from '@/views/AddProductView'
import EditProductView from '@/views/EditProductView'
import ProductView from '@/views/ProductView'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/add-product',
    name: 'add product',
    component: AddProductView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/edit-product/:id',
    name: 'editProduct',
    component: EditProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
