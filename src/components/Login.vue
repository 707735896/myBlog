<template>
  <div>
    <div class="login-wrap">
      <h3>登录</h3>
      <input type="text" placeholder="请输入用户名" v-model="username">
      <input type="password" placeholder="请输入密码" v-model="password">
      <el-button type="primary" @click="login" v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
      <el-button>注册</el-button>
    </div>

  </div>
</template>

<script>
  import {setCookie, getCookie} from '../assets/js/cookie.js'
  export default {
    data() {
      return {
        username: '',
        password: '',
        fullscreenLoading: false
      }
    },
    mounted() {
      /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
      if (getCookie('username')) {
        this.$router.push('/Main')
      }
    },
    methods: {
      login() {
        if (this.username == "" || this.password == "") {
          alert("请输入用户名或密码")
        } else {
          // let data = {'username': this.username, 'password': this.password}
          /*接口请求*/
          this.$http.get('https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone=13594347817&passwd=123456').then((res) => {
            console.log(res.data);
            console.log(res.data.data.name);
            if (this.username == res.data.data.name || this.password == res.data.data.passwd) {
              setCookie('username', this.username, 1000 * 60)
              this.fullscreenLoading = true;
              setTimeout(() => {
                this.fullscreenLoading = false;
                this.$router.push(this.$route.query.redirect || '/')
              }, 500);
            } else {
              alert('登录失败')
            }
          })
        }

      }
    }
  }
</script>

<style scoped>
  .login-wrap {
    text-align: center;
    margin-top: 10%;
  }

  input {
    display: block;
    width: 250px;
    height: 40px;
    line-height: 40px;
    margin: 0 auto;
    margin-bottom: 10px;
    outline: none;
    border: 1px solid #888;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
  }

  p {
    color: red;
  }

  button {
    display: inline-block;
    height: 40px;
    margin: 0 auto;
    border: none;
    font-size: 16px;
    margin-bottom: 5px;
  }

  span {
    cursor: pointer;
  }

  span:hover {
    color: #41b883;
  }
</style>
