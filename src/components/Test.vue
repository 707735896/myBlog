<template>
  <div>
    <Header></Header>
    <p>{{count}}</p>
    <button @click="increment">+5</button>
    <button @click="decrement">-3</button>
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
