<template>
  <section class="stats-container">
      <p>Dollar Here</p>
  </section>
</template>

<script>
export default {
    name: 'StatsContainer',
    components: {

    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .stats-container {
        @include section-styling;
    }
</style>