<template>
  <div id="app">
    <GameExplanation></GameExplanation>
    <BusinessContainer></BusinessContainer>
    <YourWealthContainer></YourWealthContainer>
  </div>
</template>

<script>

import GameExplanation from './components/GameExplanation'
import YourWealthContainer from './containers/YourWealthContainer'
import BusinessContainer from './containers/BusinessContainer'

export default {

  name: 'App',
  components: {
    GameExplanation,
    YourWealthContainer,
    BusinessContainer
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