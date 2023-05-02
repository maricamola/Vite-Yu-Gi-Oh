

<script>
import axios from "axios";
import {store} from "./data/store";
import Header from './components/Header.vue'
import CardsContainer from './components/CardsContainer.vue'


export default {
  name: 'App',
  components:{
    Header,
    CardsContainer
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl)
      .then(result => {
        console.log(result.data);
      })
    }
  },
  mounted(){
    this.getApi();
  }
}


</script>


<template>

<Header />

<CardsContainer />

</template>
<style lang="scss">
@use './scss/main.scss';

</style>