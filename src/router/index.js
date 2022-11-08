import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestPageView from '../views/TestPageView.vue'
import MovieListView from '../views/MovieListView.vue'

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
    path: '/movieList',
    name: 'movieList',
    // component: () =>
    //   import(/* webpackChunkName: "MovieList" */ '../views/MovieListView')
    component: MovieListView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
