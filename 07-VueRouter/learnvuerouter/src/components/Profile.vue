<template>
  <div>
    <h2>我是Profile组件</h2>
    <p>{{$route.query}}</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.height}}</p>
  </div>
</template>

<script>
export default {
  name: "Profile",
  created () {
    console.log('create()');
    // document.title = '档案'
  },
  destroyed () {
    console.log('destroyed()');
  }
}
</script>

<style>

</style>