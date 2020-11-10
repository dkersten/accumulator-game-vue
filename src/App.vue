<template>
  <div id="app">
      <h1>Accumulator Game</h1>
    <h2>Blah</h2>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style >
  body {
    background: #f7f7f7;
  }
</style>

<style lang="scss" scoped>
  @import './assets/scss/variables.scss';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: red;
    max-width: 1400px;
    margin: 2rem auto;

    h1 {
      color: $color-green-dark;
      font-weight: 700;
    }
  }
</style>