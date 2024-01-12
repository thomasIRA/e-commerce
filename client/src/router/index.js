import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'
import TestView from '@/views/TestView'
import AboutView from '@/views/AboutView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
