<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

  export default {
    name: 'App'
  }
</script>

<style>
  * {
    font-family: 微软雅黑;
    padding: 0;
    margin: 0;
  }
  html {
    height: 100%;
    background-color: #f4f5f5
  }

  .toLink {
    margin: auto 25vw 10vh;
  }

  h3 {
    color: #8cc5ff;
    font-style: 24px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h4 {
    text-indent: 2em;
    color: #5daf34;
  }

  a {
    color: #337ab7;
    text-decoration: none
  }

</style>
