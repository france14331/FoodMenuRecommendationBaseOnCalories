import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import SignUp from '@/views/SignUp.vue'
import SignIn from '@/views/SignIn.vue'
import Main from '@/views/Main.vue'
import Recommend from '@/views/Recommend.vue'
import History from '@/views/History.vue'
import PageNotFound from '@/views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound,
    meta: {
      requireUser: false,
      requiresAuth: false
    }
  },
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
  {
    path: '/recommend',
    name: 'Recommend',
    component: Recommend,
    meta: {
      requireUser: true,
      requiresAuth: true
    }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      requireUser: true,
      requiresAuth: true
    }
  }
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

const DEFAULT_TITLE = ".:: Food Recommendation ::.";
router.afterEach((to) => {
    Vue.nextTick(() => {
        document.title = to.meta.title != undefined ? to.meta.title + " - " + DEFAULT_TITLE : DEFAULT_TITLE;
    });
});

export default router
