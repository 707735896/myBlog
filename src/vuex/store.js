import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  count: 1,
  message: '',
  accessToken:null,
  isLogin:false
}


const mutations = {
  //解决vuex和v-model的双向数据绑定
  updateMessage(state, message) {
    state.message = message
  }
}

export default new Vuex.Store({
  state,
  mutations
})
