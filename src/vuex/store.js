import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 1,
  message: '',
  accessToken: null,
  msg: ''
}
// 获取状态信息
const getters = {
  count: (state) => state.count += 100
}
const actions = {
  increment: ({commit}) => commit('increment'), // 提交到mutations中处理
  decrement({commit}) {
    commit('decrement')
  }
}

const mutations = {
  //解决vuex和v-model的双向数据绑定
  updateMessage(state, message) {
    state.message = message
  },
  increment: (state) => state.count = state.count + 5,
  decrement(state) {
    state.count = state.count - 3
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
