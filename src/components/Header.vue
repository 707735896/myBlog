<template>
  <div class="header">
    <router-link to="/Main">
      <div class="myName">My Blog</div>
    </router-link>
    <div class="top">
      <ul>
        <li>
          <router-link to="/Translate">在线翻译</router-link>
        </li>
        <li>
          <router-link to="/Photo">花瓣福利</router-link>
        </li>
        <li>
          <router-link to="/Pos">点餐系统</router-link>
        </li>
        <li>
          <router-link to="/Test">测试Vuex</router-link>
        </li>
        <li>
          <router-link to="/Vuex2">测试Vuex2</router-link>
        </li>
        <li>
          <div @click="login" class="login" v-show="dl">登录</div>
          <div @click="qut" class="qut" v-show="tc" v-loading.fullscreen.lock="fullscreenLoading">退出</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Header",
    data() {
      return {
        dl: true,
        tc: false,
        fullscreenLoading: false
      }
    },
    created() {
      console.log(this.$store.state.isLogin)
      this.tc = true;
      this.dl = false;
    },
    methods: {
      qut() {
        this.$confirm('你确定退出吗?', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
          .then(() => {
            this.fullscreenLoading = true;
            setTimeout(() => {
              this.fullscreenLoading = false;
              this.$store.dispatch('Logout').then(() => {
                this.$router.push({path: '/login'});
              })
              // if (getCookie('username')) {
              //   delCookie('username')
              //   this.$router.push('/Login')
              // } else {
              //   alert('未登录')
              // }
            }, 500);
          })
          .catch(() => {
          })
        // if (confirm('你确定退出吗？')) {
        //
        //
        // }
      },
      login() {
        this.$router.push('/Login')
      }
    }
  }
</script>

<style scoped>
  .router-link-active {
    color: #007fff;
  }

  .header {
    margin-bottom: 30px;
    border-bottom: 1px solid #f1f1f1;
    width: 100%;
    background-color: #ffffff;
  }

  .top {
    height: 70px;
    max-width: 1200px;
    background-color: #ffffff;
    margin: 0 auto;
    border-bottom: 1px solid #f1f1f1;
  }

  .myName {
    font-size: 24px;
    color: #007fff;
    padding: 15px 50px;
    float: left;
  }

  ul {
    display: flex;
  }

  li {
    flex: 1;
    text-align: center;
  }

  ul, li {
    list-style: none;
  }

  ul li, ul li > a {
    width: 150px;
    height: 70px;
    line-height: 70px;
    color: #71777c;
    cursor: pointer;
  }

  ul li > a:hover {
    color: #007fff;
  }

  .qut:hover, .login:hover {
    color: #007fff;
    cursor: pointer;
  }
</style>
