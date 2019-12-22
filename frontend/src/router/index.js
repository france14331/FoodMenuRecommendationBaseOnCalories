import Vue from 'vue'
import Router from 'vue-router'
//  import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/Index'
import Signin from '@/components/Signin'
import Register from '@/components/Register'
import MainProfile from '@/components/MainProfile'
import Recommend from '@/components/RecommendFood'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/index',
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
    }
  ],
  mode: 'history'
})
