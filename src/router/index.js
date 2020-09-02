import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'activities',
    component: () => import('./../views/Activity.vue')
  },
  {
    path: '/reserveActivity/:id',
    name: 'reserveActivity',
    component: () => import('./../views/ReserveActivity.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
