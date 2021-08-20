import Vue from 'vue'
import VueRouter from 'vue-router'
import state from '../store/state'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sign_up',
    name: 'RegisterPage',
    component: () => import('../views/RegisterPage.vue'),
  },
  {
    path: '/sign_up/verify',
    name: 'VerifyPage',
    component: () => import('../views/VerifyPage.vue'),
  },

  {
    path: '/sign_in',
    name: 'LoginPage',
    component: () => import('../views/LoginPage.vue'),
  },
  {
    path: '/reset_password',
    name: 'ResetPasswordPage',
    component: () => import('../views/ResetPasswordPage.vue'),
  },
  {
    path: '/new_password',
    name: 'SetNewPasswordPage',
    component: () => import('../views/SetNewPasswordPage.vue'),
  },
  {
    path: '/profile',
    name: 'ProfilePage',
    component: () => import('../views/ProfilePage.vue'),
  },
  { path: '*', redirect: '/sign_in' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, _, next) => {
  if (state.user && to.name !== 'ProfilePage') {
    next({ name: 'ProfilePage' })
  } else if (!state.user && to.name === 'ProfilePage') {
    next({ name: 'LoginPage' })
  } else next()
})

export default router
