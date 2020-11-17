<template>
  <section class="stats-container">
      <img src="../../public/dollarBill.png" alt="Dollar Bill. Click it to make more money.">
      <InnerStatsContainer></InnerStatsContainer>
  </section>
</template>

<script>

import InnerStatsContainer from '../components/InnerStatsContainer'

export default {
    name: 'StatsContainer',
    components: {
        InnerStatsContainer
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .stats-container {
        @include section-styling;

        img {
            display: block;
            margin: 0 auto $vertical-spacing-sm;
        }
    }
</style>