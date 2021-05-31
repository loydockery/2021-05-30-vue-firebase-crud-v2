import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/authors',
    name: 'Authors',
    component: () =>
      import(/* webpackChunkName: "authors" */ '../views/Authors.vue'),
  },
  {
    path: '/books',
    name: 'Books',
    component: () =>
      import(/* webpackChunkName: "books" */ '../views/Books.vue'),
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/Edit.vue'),
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
})

export default router
