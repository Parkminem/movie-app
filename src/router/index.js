import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestPageView from '../views/TestPageView.vue'
import PopularListView from '../views/PopularListView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/test',
    name: 'testPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "test" */ '../views/TestPageView')
    component: TestPageView
  },
  {
    path: '/popular',
    name: 'popularList',
    // component: () =>
    //   import(/* webpackChunkName: "PopularList" */ '../views/PopularListView')
    component: PopularListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
