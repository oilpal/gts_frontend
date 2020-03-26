import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/login/login.vue'
import VueCookies from 'vue-cookies'

import { refreshToken } from '../service/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { unauthorized: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (VueCookies.get('token') === null && VueCookies.get('refresh_token') !== null) {
    await refreshToken()
  }

  if (to.matched.some(record => record.meta.unauthorized) || VueCookies.get('token')) {
    return next()
  }
  alert('로그인 해주세요.')
  return next('/login')
})

export default router
