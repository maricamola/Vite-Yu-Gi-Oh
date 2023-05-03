<script>
import { store } from "../data/store";

export default {
  name: 'SearchBar',

  data() {
    return {
      store
    }
  },
}
</script>


<template>
  <div class="container m-3 d-flex">
    <select v-model="store.filterType" class="form-select" aria-label="Default select example">
      <option value="" selected>Select type</option>
      <option v-for="(type, id) in store.listType" :key="id" :value="type">{{ type }}
      </option>
    </select>


    <div class="btn btn-warning ms-3" @click="$emit('changeType')">Search</div>


    <div class="btn btn-danger ms-3" @click="$emit('resetAll')">Reset</div>


  </div>
</template>


<style lang= "scss" scoped>
@use '../scss/main.scss' as *;

.container {
  width: 30%;
}
</style>