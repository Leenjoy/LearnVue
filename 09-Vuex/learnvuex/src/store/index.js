import Vue from 'vue'
import Vuex from 'vuex'

import {
  INCREMENT
} from './mutations-types'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const moduleA = {
  state: {
    name: 'zhangsan'
  },
  mutations: {
    updateName(state,payload) {
      state.name = payload
    }
  },
  getters: {
    fullName(state) {
      return state.name + '11111'
    },
    fullName2(state,getters) {
      return getters.fullName + '22222'
    },
    // 注意module中的getter可以有第三个参数rootState拿到根状态中的值
    fullName3(state,getters,rootState) {
      return getters.fullName2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(context) {
      console.log(context);
      setTimeout(() => {
        context.commit('updateName','wangwu')
      },1000)
    }

  },

}

const store = new Vuex.Store({
  // 保存共享状态 单一状态树
  state: {
    counter: 1000,
    students: [
      {id: 1001, name: 'lee1', age: 18},
      {id: 1002, name: 'lee2', age: 19},
      {id: 1003, name: 'lee3', age: 20},
      {id: 1004, name: 'lee4', age: 21}
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  mutations: {
    // 方法
    // increment(state) {
    //   state.counter ++
    // },
    [INCREMENT](state) {
      state.counter ++
    },
    decrement(state) {
      state.counter --
    },
    incrementCount(state, count) {
      state.counter += count
    },
    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      // state.info.name = 'codewhy'
      // // 新增属性无法响应式
      // state.info['address'] = 'losanges'
      // 必须使用Vue.set才可以响应
      Vue.set(state.info,'address','losanges')
      
      // // 该删除方法无法相应式
      // delete state.info.age
      // // 必须使用Vue.delete
      // Vue.delete(state.info,'age')
    }
  },
  // 异步操作放在actions中，不要放在mutations
  actions: {
    // context: 上下文
    // aUpdateInfo(context,payload) {
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success();
    //   },1000)
    // }

    // 更优雅的写法
    aUpdateInfo(context,payload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          
          resolve('成功后携带的参数信息')
        },1000)
      })
      
    }

  },
  // 类似于computed计算属性
  getters: {
    powerCounter(state) {
      return state.counter * state.counter
    },
    more20stu(state) {
      return state.students.filter(s => s.age >= 20)
    },
    more20stuLength(state,getters) {
      return getters.more20stu.length
    },
    moreAgeStu(state) {
      // return function (age) {
      //   return state.students.filter(s => s.age >= age)
      // }

      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules: {
    a: moduleA
  }
})

// 3.导出store对象
export default store