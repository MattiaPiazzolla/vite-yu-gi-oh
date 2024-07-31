<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js'
import axios from 'axios'

export default{
  components: {
    AppHeader,
    AppMain,
  },
  created() {
    this.getCardList()
  },
  methods: {
    getCardList() {
      axios.get(store.apiUrl).then((result) => {
        store.cardList = result.data.data
      })
    }
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <AppMain />
  </main>
</template>

<style lang="scss">
@import './styles/generals.scss'
</style>
