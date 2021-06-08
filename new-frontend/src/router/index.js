import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import Main from '@/views/Main.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requireUser: false,
      requiresAuth: false
    }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: {
      requireUser: false,
      requiresAuth: false
    }
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: {
      requireUser: false,
      requiresAuth: false
    }
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    meta: {
      requireUser: true,
      requiresAuth: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  let user = JSON.parse(localStorage.getItem('user'))

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/signin',
        params: { nextUrl: to.fullPath }
      })
    } else {
      if (!to.matched.some(record => record.meta.requireUser)) {
        if (user) {
          next({
            path: '/main',
            params: { nextUrl: to.fullPath }
          })
        } else {
          next()
        }
      } else {
        next()
      }
    }
  } else {
    
      if (!to.matched.some(record => record.meta.requireUser)) {
        if (user) {
          next({
            path: '/main',
            params: { nextUrl: to.fullPath }
          })
        } else {
          next()
        }
      } else {
        next()
      }
  }
})

export default router
