<script>
import { store } from "../data/store"
import Card from './Card.vue'

export default {
  name: 'CardsContainer',
  components: {
    Card
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <div class="container">
    <div class="cards">
      <h4>Found {{ store.resultArray.length }} cards</h4>
    </div>
    <!--Ciclo le cards-->
    <div class="cardsList">
      <Card v-for="card in store.resultArray" :key="card.id" :img="card.card_images[0]" :name="card.name"
        :type="card.archetype || card.type" />
    </div>

  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 30px;
  margin-top: 20px;
  background-color: white;

  .cards {
    color: white;
    background-color: #212529;
    width: 100%;

    h4 {
      margin: 0;
      padding: 0;
    }
  }

  .cardsList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
}
</style>