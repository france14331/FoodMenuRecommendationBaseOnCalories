import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Signin from '@/components/Signin'
import Register from '@/components/Register'
import MainProfile from '@/components/MainProfile'
import Recommend from '@/components/RecommendFood'
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/main',
      name: 'MainProfile',
      component: MainProfile
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})
