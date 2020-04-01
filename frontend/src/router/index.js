import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/login/login.vue'
import Billing from '../views/Billing.vue'
// import Customer from '../views/Customer.vue'
import VueCookies from 'vue-cookies'

import { refreshToken } from '../service/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/billing',
        name: 'Billing',
        component: Billing
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { unauthorized: true }
  },
  {
    path: '/billing',
    name: 'Billing',
    component: Billing
  }
  /* ,
  {
    path: '/customer',
    name: 'Customer',
    component: Customer
  } */
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
