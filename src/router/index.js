import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
  //   path: '/',
  //   name: 'Activities',
  //   component: () => import('../views/Activity.vue')
  // },
  // {
  //   path: '/activities/reservarActividad',
  //   name: 'ReserveActivity',
  //   component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
