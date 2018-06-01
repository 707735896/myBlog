<template>
  <div>
    <Header></Header>
    <div class="toLink">
      <ul>
        <h3>1、登录</h3>
        <h4>介绍：
          实现在线登录功能，主要用到的是axios调用远程登录接口，登录前判断cookie是否已登录，如果登录直接跳转到主页，如果未登录继续登录步骤并把登录的信息存到cookie，退出时则清空信息
        </h4>
      </ul>
      <ul>
        <h3>2、在线翻译小工具</h3>
        <h4>介绍：
          实现在线翻译功能，用到技术有element样式实现select选择，vuex怎么双向绑定v-model，axios调用远程翻译接口
        </h4>
      </ul>
      <ul>
        <h3>3、花瓣福利</h3>
        <h4>在线链接：
          用到的有axios调用远程接口，应获取到20个对象赋值给数组，而不是对象里的URL，取图片时再取每个对象里的url.
        </h4>
      </ul>
      <ul>
        <h3>4、关于axios的坑：POST发送请求，提示未传递的参数</h3>
        <h4 style="color: red"></h4>
        <h4>解决办法：</h4>
        <h4>1.</h4>
        <h4>var qs = require('qs');</h4>
        <h4>axios.post('/foo', qs.stringify({ 'bar': 123 }));</h4>
        <h4>2.</h4>
        <h4> var params = new URLSearchParams();</h4>
        <h4> params.append('param1', 'value1');</h4>
        <h4>params.append('param2', 'value2');</h4>
        <h4> axios.post('/foo', params);</h4>
        <a href="https://blog.csdn.net/call_me_fly/article/details/79012581"
           style="color: red;margin-left: 32px;" target="_blank">原文链接：https://blog.csdn.net/call_me_fly/article/details/79012581</a>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    components: {
      Header
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
