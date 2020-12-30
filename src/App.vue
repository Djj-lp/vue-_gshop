<template>
  <div id="app">
    <!-- 显示路由组件 -->
    <router-view></router-view>
    <!-- 引入组件 -->
    <!-- $route当前路由 $router全局路由实例 -->
    <FooterGidue v-if="$route.meta.showFooter"></FooterGidue>
  </div>
</template>

<script>
import FooterGidue from './components/FooterGuide/FooterGuide'

export default {
  name: 'App',
  // 映射成标签
  components: {
    FooterGidue
  }
}
</script>

<style>
  #app{
    width: 100%;
    background: #f5f5f5;
    font-size: .2rem;
  }
</style>
