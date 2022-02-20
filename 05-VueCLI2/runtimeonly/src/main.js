import Vue from 'vue'
import App from './App'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

//Vue.use(Viewer) 默认配置写法
Vue.use(Viewer, {
  defaultOptions: {
      zIndex: 9999
  }
})