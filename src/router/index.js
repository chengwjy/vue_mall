import Vue from 'vue'
import VueRouter from 'vue-router'

// 视图懒加载
const home = () => import('@/views/home/home')
const category = () => import('@/views/category/category')
const cart = () => import('@/views/cart/cart')
const profile = () => import('@/views/profile/profile')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/category',
    name: 'category',
    component: category,
  }, 
  {
    path: '/home',
    name: 'home',
    component: home,
  },
  {
    path: '/cart',
    name: 'cart',
    component: cart,
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
