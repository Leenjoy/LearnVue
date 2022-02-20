<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>--------App内容:moduleA中的内容-------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>


  
    <h2>----------App内容info种内容-----------</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updatInfo">修改信息</button>

    <h2>----------------App内容-----------------</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    
    <h2>----------------App内容:getters相关信息------------</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(19)}}</h2>

    <h2>----------------Hello Vuex内容---------------------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex.vue'

  import {
    INCREMENT
  } from './store/mutations-types'

  export default {
    name: 'App',
    components: {
      HelloVuex
    },
    data () {
      return {
        message: '我是App组件'
      }
    },
    // computed: {
    //   more20stu() {
    //     return this.$store.state.students.filter(s => s.age >= 20)
    //   }
    // },
    methods: {
      addition() {
        this.$store.commit(INCREMENT)
      },
      subtraction() {
        this.$store.commit('decrement')
      },
      addCount(count) {
        // payload: 负载
        // 1. 普通的提交封装
        this.$store.commit('incrementCount', count)

        // 2. 特殊的提交封装
        this.$store.commit({
          type: 'incrementCount',
          count: count
        })

        // 第一种普通提交count只是一个值
        // 第二种特殊提交count是一整个对象包括了type、count
      },
      addStudent() {
        const stu = {id: 1005, name: 'lee5', age: 22}
        this.$store.commit('addStudent', stu)
      },
      updatInfo() {
        // // ->mutation
        // this.$store.commit('updateInfo')

        // // ->aciton
        // this.$store.dispatch('aUpdateInfo',{
        //   message: '我是携带的信息',
        //   success: () => {
        //     console.log('里面已经完成了');
        //   }
        // })

        this.$store
            .dispatch('aUpdateInfo','我是携带的信息')
            .then(res => {
              console.log('里面已经完成了');
              console.log(res);
            })
      },
      updateName() {
        this.$store.commit('updateName','lisi')
      },
      asyncUpdateName() {
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>
  

<style>

</style>
