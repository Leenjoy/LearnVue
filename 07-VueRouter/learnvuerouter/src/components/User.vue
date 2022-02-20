<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'User',
    computed: {
      userId() {
        //$route 当前哪一个路由处于活跃状态就会取到这个路由下面的值
        return this.$route.params.userId
      }
    },
    created () {
      console.log('create()');
      // document.title = '我的'
    }
  }
</script>

<style>

</style>