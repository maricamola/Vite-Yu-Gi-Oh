<script>
export default {
  name: 'Card',
  props: {
    img: Object,
    name: String,
    type: String,
  }
}
</script>

<template>
  <div class="sc-card col">
    <img :src="img.image_url" :alt="name">

    <span class="text">
      <h4>{{ name }}</h4>
      <p>{{ type }}</p>
    </span>

  </div>
</template>

<style lang="scss" scoped>
.sc-card {
  text-align: center;
  background-color: #D48F38;
  padding: 0;
  margin: 0 10px;

  img {
    width: 100%;
  }

  .text {
    background-color: #D48F38;
  }
}
</style>