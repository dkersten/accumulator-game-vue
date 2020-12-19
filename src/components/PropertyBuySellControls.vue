<template>
    <div class="control-container">
        <div class="buy-sell-btns">
            <button
                v-if="buyProperties"
                class="sell"
                @click="toggleBuy"
            >
                Sell Properties
            </button>
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
        }
    },

    methods: {
        toggleBuy() {
            this.$store.commit('toggleBuyProperties')
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
        background: $color-green-bright

    }

    p.sell-info {
        text-align: center;
        margin-bottom: $vertical-spacing-sm;
        max-width: 345px;
        line-height: $line-height-paragraph;
        color: $color-grey-dark;
    }

</style>