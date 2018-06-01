<template>
  <div>
    <Header></Header>
    <ul>
      <li v-for="item in items">
        <img :src="item.thumb" width="250" height="250">
      </li>
    </ul>
  </div>
</template>

<script>
  import Header from '@/components/Header'

  export default {
    name: "VueJs",
    data() {
      return {
        content: '',
        items: []
      }
    },
    components: {
      Header
    },
    created() {
      let arrType = ['34', '35', '36', '37', '38', '39', '40'];
      let page = parseInt(Math.random() * 200);//页数
      let type = arrType[Math.round(Math.random() * (arrType.length - 1))];  //随机抽取一个值

      //1.解决POST无法传参
      let params = new URLSearchParams();
      params.append('showapi_appid', '66433');
      params.append('showapi_sign', '2c8bbb75cb5a4b248578ffcce2332e68');

      //2.解决POST无法传参
      let qs = require('qs');
      let postData = {
        'showapi_appid': '66433',
        'showapi_sign': '2c8bbb75cb5a4b248578ffcce2332e68',
        'type': type,
        'page': page
      }

      this.$http.post('http://route.showapi.com/819-1', qs.stringify(postData))
        .then((res) => {
          console.log(res.data.showapi_res_body)
          //多个对象复制给item数组
          this.items = res.data.showapi_res_body
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
</script>

<style scoped>
  ul li {
    display: inline-block;
  }
</style>
