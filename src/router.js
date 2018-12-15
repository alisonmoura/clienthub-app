import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('@/pages/Login.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/Home.vue')
    }
  ]
})
