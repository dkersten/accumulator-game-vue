<template>
    <div class="inner-stats-container">
        <p class="netWorth">Your Wealth: $<span class="wealth-count-num">{{yourWealth.toLocaleString()}}</span></p>
        <p>Per Second: $<span class="per-second-num">{{perSecond}}</span></p>
        <p>Total Net Worth: $<span class="net-worth-num">{{netWorth.toLocaleString()}}</span></p>
    </div>
</template>

<script>
    
import { mapGetters } from 'vuex'

export default {
    name: "InnerStatsContainer",
    components: {

    },
    computed: {
        ...mapGetters(['yourWealth', 'perSecond', 'netWorth'])
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

        p.netWorth, p.netWorth span {
            font-size: $font-paragraph-lg;
            font-weight: 700;
        }
    }

</style>