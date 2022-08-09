import Vue from 'vue'
import VueRouter from 'vue-router'

// 引用路由组件
import Home from '@/views/home/indexHome.vue'
import Register from '@/views/Register/RegisterIndex.vue'
import Search from '@/views/Search/SeachIndex.vue'
import Login from '@/views/login/LoginIndex.vue'

// 使用插件
Vue.use(VueRouter)

// 配置路由
export default new VueRouter({
  routes: [{
    path: '/home',
    component: Home,
    meta: { Show1: true }
  },
  {
    path: '/register',
    component: Register,
    meta: { Show1: false }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: { Show1: true },
    name: 'search'
  },
  {
    path: '/login',
    component: Login,
    meta: { Show1: false }
  },
  {
    path: '*',
    redirect: '/home'
  }
  ]
})
