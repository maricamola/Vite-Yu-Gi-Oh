<script>
import axios from "axios";
import { store } from "./data/store";
import Header from './components/Header.vue'
import CardsContainer from './components/CardsContainer.vue'


export default {
  name: 'App',
  components: {
    Header,
    CardsContainer
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getApi() {
      //Per evitare che stampi tutte le immagini
      axios.get(store.apiUrl + "?num=95&offset=0")
        .then(result => {
          store.resultArray = result.data.results
          console.log(result.data);
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

  <CardsContainer />
</template>

<style lang="scss">
@use './scss/main';
@import "bootstrap/scss/bootstrap.scss";
</style>