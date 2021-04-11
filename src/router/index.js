import { createRouter, createWebHistory } from 'vue-router'
//import Router  from 'vue-router'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/Latexpage/:datakey',
    name: 'PageContainer',
    component: PageContainer,
    //component: () => import('../views/PageContainer.vue'),
    props: true,
   
  },
  {
    path: '/tools',
    name: 'Tools',
    component: () => import('../views/Tools.vue')
  },


]


const router = createRouter({
  mode: 'history',
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return window.scrollTo({ 
        top: document.querySelector(to.hash).offsetTop, 
        behavior: 'smooth' 
      })
    } else {
      return { x: 0, y: 0 }
    }
  }
  //scrollBehavior () {
  //  return { x: 0, y: 0 }
 // }
})


export default router