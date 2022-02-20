import axios from "axios";

export function request(config) {
  // return new Promise((resolve,reject) => {
  //   // 1.创建axios的实例
  //   const instance = axios.create({
  //     baseURL: 'http://123.207.32.32:8000',
  //     timeout: 5000
  //   }) 

  //   // 发送真正的网络请求
  //   instance(config)
  //     .then(res => {
  //       resolve(res)
  //     })
  //     .catch(err => {
  //       reject(err)
  //     })
  // })

  // 1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  }) 

  // 2.axios的拦截器
  instance.interceptors.request.use(config => {
    console.log(config);
    // 2.1.为什么要拦截请求
    // 1.比如config中的一些信息不符合服务器的请求

    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

    // 3.某些网络请求（比如登录（token））,必须携带特殊信息
    return config
  },err => {
    console.log(err);
  })

  // 2.2.响应拦截
  instance.interceptors.request.use(res => {
    // console.log(res);
    return res
  }, err => {
    console.log(err);
  })

  // 3.发送真正的网络请求
  // 本身就是promise,可以直接返回instance
  return instance(config)
  
}