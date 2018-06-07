<template>
  <div>
    <Header></Header>
    <p>{{count}}</p>
    <el-button @click="increment">+5</el-button>
    <el-button @click="decrement">-3</el-button>
  </div>

</template>

<script>
  import Header from '@/components/Header'
  import {mapState, mapActions, mapGetters} from 'vuex'

  export default {
    name: "Test",
    components: {
      Header
    },
    computed: {
      ...mapState(['count']),
      ...mapGetters(['count'])
    },

    methods: {
      ...mapActions(['increment']),
      ...mapActions(['decrement'])
    }

  }
</script>

<style scoped>

</style>
