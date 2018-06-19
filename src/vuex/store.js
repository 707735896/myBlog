import Vue from 'vue'
import Vuex from 'vuex'
import {loginByUserInfo} from "../api/login";

Vue.use(Vuex);

const state = {
  count: 1,
  message: '',
  accessToken: null,
  msg: '',
  username: sessionStorage.getItem('USERNAME'),
  role: sessionStorage.getItem('ROLE'),
  introduce: '',
  newrouter: [],
  isLogin: 0
}

// 获取状态信息
const getters = {
  count: state => state.count += 100,
  username: state => state.username,
  role: state => state.role,
  newrouter: state => state.newrouter,
  isLogin: state => state.isLogin
}

const actions = {
  increment: ({commit}) => commit('increment'), // 提交到mutations中处理
  decrement({commit}) {
    commit('decrement')
  },
  Logins({commit}, info) {
    return new Promise((resolve, reject) => {
      let data = {};
      loginByUserInfo.map(function (item) {//获取所有用户信息
        if (info.username === item.username || info.password === item.password) {
          commit('SET_ISLOGIN',1);
          commit('SET_USERNAME', item.username);
          sessionStorage.setItem('USERNAME', item.username);
          commit('SET_ROLE', item.role);
          sessionStorage.setItem('SET_ROLE', item.role);
          return data = {username: item.username, introduce: item.introduce}
        } else {
          return data;
        }
      })
      resolve(data);
    }).catch(error => {
      reject(error);
    })
  },
  Logout({commit}, state) {
    return new Promise((resolve, reject) => {
      commit('SET_USERNAME', '');
      commit('SET_ROLE', '');
      sessionStorage.removeItem('USERNAME');
      sessionStorage.removeItem('ROLE');
      resolve();
    }).catch((error) => {
      reject(error);
    })
  },
  Roles({commit}, roles) {
    return new Promise((resolve, reject) => {
      commit('SET_NEWROUER', newrouter); //存储最新路由
      resolve(newrouter);
    }).catch(error => {
      reject(error);
    });
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
  },
  SET_USERNAME: (state, username) => {
    state.username = username
  },
  SET_ROLE: (state, role) => {
    state.role = role
  },
  SET_INTRODUCE: (state, introduce) => {
    state.introduce = introduce
  },
  SET_NEWROUTER: (state, newrouter) => {
    state.newrouter = newrouter
  },
  SET_ISLOGIN: (state, status) => {
    state.isLogin = 1;
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
