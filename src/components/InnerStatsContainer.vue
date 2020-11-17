<template>
    <div class="inner-stats-container">
        <p>Your Wealth: $<span class="wealth-count-num">100</span></p>
        <p>Per Second: $<span class="per-second-num">0</span></p>
        <p>Total Net Worth: $<span class="net-worth-num">0</span></p>
    </div>
</template>

<script>
export default {
    name: "InnerStatsContainer",
    components: {

    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .inner-stats-container {
        text-align: center;
        font-size: $font-paragraph-sm;

        p {
            &:not(:last-of-type) {
                margin-bottom: $vertical-spacing-sxs;
            }

            span {
                font-weight: 700;

                &.wealth-count-num {
                    color: $color-green-dark;
                }

                &.per-second-num, &.net-worth-num {
                    color: $color-green-bright;
                }
            }
        }
    }

</style>