import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/image',
    name: 'images',
    component: () => import('.././views/images.vue')
  },
  {
    path: '/image/add',
    name: 'add-image',
    component: () => import('.././views/addimage.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('.././views/account.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
