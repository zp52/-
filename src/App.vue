<template>
  <div class="app">
<Header></Header>
<!-- 路由组件出口的地方 -->
 <h1>我是根组件</h1>
<router-view></router-view>
<!-- 在home /search 显示，在登录、注册隐藏 -->
<Footer v-show="$route.meta.Show1"></Footer>

  </div>
</template>

<script>
import Header from '@/components/header/HeaderH.vue'
import Footer from '@/components/footer/FooterF.vue'
export default {
  components: {
    Header,
    Footer
  }

}
</script>

<style >
.app{
  height: 50px;
}
</style>
