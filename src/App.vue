<script>
import axios from "axios";
import { store } from "./data/store";
import Header from './components/Header.vue'
import CardsContainer from './components/CardsContainer.vue'
import SearchBar from './components/SearchBar.vue'


export default {
  name: 'App',
  components: {
    Header,
    CardsContainer,
    SearchBar,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi() {
      //Per evitare che stampi tutte le immagini
      axios.get(store.apiUrl, {
        params: {
          type: store.filterType
        }
      })
        .then(result => {
          store.resultArray = result.data.data;

          if (store.listType.length === 0) {
            store.resultArray.forEach(element => {
              if (!store.listType.includes(element.type)) {
                store.listType.push(element.type)
              }
            })
          }
        })

    }
  },
  mounted() {
    this.getApi();
  }
}


</script>


<template>
  <Header />

  <SearchBar />

  <CardsContainer />
</template>

<style lang="scss">
@use './scss/main';
@import "bootstrap/scss/bootstrap.scss";
</style>