import Vue from 'vue'
import App from './App.vue'
import router from '@/Router/index.js'
// 注册全局组件
import TypeNav from '@/components/TypeNav/indexH.vue'
// 引入仓库
import store from '@/store/index.js'
// 测试
import { getCategoryList } from '@/api/index.js'

const re = getCategoryList()
console.log(re)

Vue.config.productionTip = false
Vue.component(TypeNav.name, TypeNav)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
