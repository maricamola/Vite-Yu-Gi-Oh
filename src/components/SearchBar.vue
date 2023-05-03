<script>
export default {
  name: 'SearchBar'
}
</script>


<template>
  <div class="container m-3">
    <select class="form-select" aria-label="Default select example">
      <option selected>Select type</option>
      <option v-for="type in listType" :key="type" :value="type">{{ type }}</option>
    </select>
  </div>
</template>


<style lang= "scss" scoped>
@use '../scss/main.scss' as *;

.container {
  width: 10%;
}
</style>