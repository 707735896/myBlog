<template>
  <div>
    <Header></Header>
    <div style="float: left">
      <textarea :value="message" @input="updateMessage"></textarea>
      <div class="content">关键字：{{message}}</div>
      <div class="result">{{result}}</div>
    </div>
    <el-select v-model="type" class="select">
      <el-option v-for="item in options" :key="item.value"
                 :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button type="primary" @click="getTrans">翻译</el-button>
  </div>
</template>

<script>
  import store from '@/vuex/store'
  import Header from '@/components/Header'
  import {mapState} from 'vuex'

  export default {
    name: "Translate",
    data() {
      return {
        options: [{
          value: 'en',
          label: '英语'
        }, {
          value: 'ja',
          label: '日语'
        }, {
          value: 'ru',
          label: '法语'
        }],
        type: 'en',
        result: ''
      }
    }
    ,
    components: {
      Header
    }
    ,
    computed: {
      //处理vuex和v-model之间的双向数据绑定
      ...mapState({
        message: state => state.message
      })
    },
    methods: {
      getTrans() {
        let type = this.type;
        let input = this.message;
        if (input !== '') {
          this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170721T082515Z.54cf3dc583f679db.f4a96182281281d8b5dfe24b4e88298e2133f219&lang=' + type + '&text=' + input)
            .then((res) => {
              this.result = res.data.text.toString();
            })
        } else {
          return
        }
      },
      updateMessage(e) {
        this.$store.commit('updateMessage', e.target.value)
      }
    }
    ,
    store
  }
</script>

<style scoped>
  .select {
    margin-top: 50px;
  }

  .result, textarea {
    margin: 50px;
    width: 700px;
    height: 200px;
  }

  .content {
    margin-left: 50px;
    width: 500px;
    color: red;
  }

  .result {
    border: 1px dashed #71777c;
    color: #007fff;
  }
</style>
