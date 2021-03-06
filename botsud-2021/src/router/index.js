import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// import { Map as mapPage } from '../views/Map.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/map',
    name: 'map',
    component: () => import(/* webpackChunkName: "map" */ '../views/Map.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 140 }
      }
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
