import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PageContainer from "../views/PageContainer.vue"

//const { dict } = require('../pages.js')
//dict[0]


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/:path',
    name: 'PageContainer',
    component: PageContainer,
    //component: () => import('../views/PageContainer.vue'),
    props: true
  }

]

const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
