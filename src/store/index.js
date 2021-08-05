/*
    vuex最核心的管理对象store
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 声明使用
Vue.use(Vuex)

// 创建并暴露store
export default new Vuex.Store({
  // 传一个配置对象
  state,
  mutations,
  actions,
  getters
})
