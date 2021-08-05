// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {Button} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer' // 加载mockServer.js
import loadimage from './commom/loading.gif'
import './filters' // 加载过滤器

// 注册全局组件标签
Vue.component(Button.name, Button) // <mt-button>
Vue.config.productionTip = false

// 注册使用vue-lazyload
Vue.use(VueLazyload, { // 内部定义了一个指令v-lazy
  loading: loadimage // 图片加载状态下显示的图片
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router, // 使用vue-router
  store // 使用vuex
})
