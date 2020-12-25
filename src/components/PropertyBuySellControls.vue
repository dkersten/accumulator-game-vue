<template>
    <div class="control-container">
        <div class="buy-sell-btns">
            <span
                v-if="buyProperties"
            >
            <button
                v-if="buyProperties10"
                class="buy bulk"
                @click="toggleBuy10"
            >
                Buy single
            </button>
            <button
                v-else
                class="buy bulk"
                @click="toggleBuy10"
            >
                Buy 10
            </button>
            <button
                class="sell"
                @click="toggleBuy"
            >
                Sell Properties
            </button>
            </span>
            <button
                v-else
                class="buy"
                @click="toggleBuy"
            >
                Buy Properties
            </button>
        </div>
        <p
            class="sell-info"
            v-if="!buyProperties"
        >
            Sell a business property for 80% of what you paid for it.
        </p>
    </div>
</template>

<script>
export default {
    name: 'PropertyBuySellControls',
    components: {

    },

    computed: {
        buyProperties() {
            return this.$store.getters.buyProperties
        },
        buyProperties10() {
            return this.$store.getters.buyProperties10
        }
    },

    methods: {
        toggleBuy() {
            this.$store.commit('toggleBuyProperties')
        },
        toggleBuy10() {
            this.$store.commit('toggleBuyProperties10')
            alert
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .buy-sell-btns {
        display: flex;
        justify-content: center;
    }

    button {
        @include buttonDefaultStyling;
        margin: 0 auto $vertical-spacing-sm;
        background: $color-green-bright;
        display: inline-block;

        &.bulk {
            margin-right: .5rem;
        }
    }

    p.sell-info {
        text-align: center;
        margin-bottom: $vertical-spacing-sm;
        max-width: 345px;
        line-height: $line-height-paragraph;
        color: $color-grey-dark;
    }

</style>