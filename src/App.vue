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
    this.getCardList(),
    this.getCardType()
  },
  methods: {
    getCardList() {
      axios.get(store.apiUrl).then((result) => {
        store.cardList = result.data.data;
        store.loading = false;
      })
    },
    getCardType() {
      axios.get(store.archetypesUrl).then((result) => {
        store.archetypes = result.data.slice(0, 10);
      })
    },
    changeType(){
      alert(store.selectedArchetype)
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
    <AppMain @filterChange="changeType"/>
  </main>
</template>

<style lang="scss">
@import './styles/generals.scss'
</style>
