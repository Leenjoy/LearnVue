<template>
  <div>
    <h2>我是主页</h2>
    <p>我是主页的内容</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        path: '/home/news'
      }
    },
    //生命周期函数
    created () {
      console.log("组件被创建时就会回调此函数created()");
      // document.title = '首页'
    },
    destroyed () {
      console.log("组件被创建时就会回调此函数destroyed()");
    },
    mounted () {
      console.log("template被挂载到dom上就会回调此函数mounted()");
    },
    updated () {
      console.log("界面发生更新时就会回调此函数updated()");
    },

    //activated()和deactivated()这两个函数，只有该组件被保持了状态使用了keep-alive时，才是有效的
    activated () {
      console.log("生效时会回调此函数activated()");
      this.$router.push(this.path);
    },
    // deactivated () {
    //   console.log("失效时会回调此函数deactivated()");
    // },

    beforeRouteLeave(to, from, next)  {
      console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style>

</style>