import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Account from '../views/account.vue'
import AddImage from '../views/addimage.vue'

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
    component: () => import('../views/images.vue')
  },
  {
    path: '/image/add',
    name: 'addImage',
    component: AddImage
  },
  {
    path: '/account',
    name: 'account',
    component: Account
  }

]

const router = new VueRouter({
  routes
})

export default router
