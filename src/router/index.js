import Vue from 'vue'
import VueRouter from 'vue-router'
import Translate from '@/components/Translate'
import Photo from '@/components/Photo'
import Main from '@/components/Main'
import Login from '@/components/Login'
import Pos from '@/components/Pos'
import Test from '@/components/Test'
import Vuex2 from '@/components/Vuex2'

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'Main',
    component: Main,
  }, {
    path: '/Login',
    name: 'Login',
    component: Login
  }, {
    path: '/Main',
    name: 'Main',
    component: Main,
  }, {
    path: '/Translate',
    name: 'Translate',
    component: Translate,
    meta: {requiresAuth: true},
  }, {
    path: '/Photo',
    name: 'Photo',
    component: Photo,
    meta: {auth: true}, // 设置当前路由需要校验  不需要校验的路由就不用写了
    beforeEnter: (to, from, next) => {
      if (sessionStorage.getItem('USERNAME')) {
        next()
      } else {
        alert('请先登录')
        next({
          path: '/Login',
          query: {redirect: to.fullPath}//把要跳转的地址作为参数传到下一步
        })
      }
    }
  }, {
    path: '/Pos',
    name: 'Pos',
    component: Pos,
  }, {
    path: '/Test',
    name: 'Test',
    component: Test
  },
    {
      path: '/Vuex2',
      name: 'Vuex2',
      component: Vuex2
    }
  ]
})

export default router
