

<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header>
    <div class="logo">
      <img src="yu-gi-oh-game.png" alt="">
      <h1>Yu-Gi-Oh Api</h1>
    </div>
  </header>
</template>


<style lang="scss" scoped>
header {
  background-color: white;
  padding: 5px;

  h1 {
    font-size: 2rem;
    margin-left: 10px;
  }

  .logo {
    display: flex;
    align-items: center;
    margin-left: 50px;
  }

  img {
    width: 5%;
    float: left;
  }
}
</style>