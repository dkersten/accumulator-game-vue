<template>
  <section class="stats-container">
      <img src="../../public/dollarBill.png" alt="Dollar Bill. Click it to make more money.">
      <div class="inner-stats-container">
          <p>Your Wealth: $ <span class="wealth-count-num">100</span></p>
          <p>Per Second: $ <span class="per-second-num">0</span></p>
          <p>Total Net Worth: $ <span class="net-worth-num">0</span></p>
      </div>
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

        img {
            display: block;
            margin: 0 auto $vertical-spacing-sm;
        }

        .inner-stats-container {

            text-align: center;

            p {
                &:not(:last-of-type) {
                    margin-bottom: $vertical-spacing-sxs;
                }

                span {
                    font-weight: 700;
                    font-size: $font-paragraph-lg;

                    &.wealth-count-num {
                        color: $color-green-dark;
                    }

                    &.per-second-num, &.net-worth-num {
                        color: $color-green-bright;
                    }
                }
            }
        }
    }
</style>