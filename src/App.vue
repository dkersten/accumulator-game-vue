<template>
  <div id="app">
      <GameExplanation></GameExplanation>
      <YourWealthContainer></YourWealthContainer>
  </div>
</template>

<script>

import GameExplanation from './components/GameExplanation'
import YourWealthContainer from './containers/YourWealthContainer'

export default {

  name: 'App',
  components: {
    GameExplanation,
    YourWealthContainer
  }
}
</script>

<style >
  body {
    background: #f7f7f7;
  }
</style>

<style lang="scss" scoped>

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    max-width: 1400px;
    padding: 0 1rem;
    margin: 2rem auto;
  }
</style>