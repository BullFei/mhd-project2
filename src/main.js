import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Notify } from 'vant'

import './assets/styles/base.scss'
// 全局注册
Vue.use(Notify)

Vue.config.productionTip = false

// 数字 变成 带 单位的数字
/**
 * 第一个参数  是过滤器的名字
 * 第二个参数  回调函数，必须有返回值
*/
Vue.filter('formatYi', (value) => {
  var Yi = Math.pow(10, 8)
  if (value > Yi) {
    return `${(value / Yi).toFixed(2)}亿`
  } else {
    return `${(value / Math.pow(10, 4)).toFixed(2)}万`
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
