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
            Sell a real world property for 80% of what you paid for it.
        </p>
    </div>
</template>

<script>
export default {
    name: 'RWPropertyBuySellControls',
    components: {

    },

    computed: {
        buyProperties() {
            return this.$store.getters.buyRWProperties
        }
    },

    methods: {
        toggleBuy() {
            this.$store.commit('toggleBuyRWProperties')
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .control-container {
        margin: 0 auto $vertical-spacing-md;
        max-width: calc((325px * 3) + 10rem);
        background: $color-cream-darker;
        padding: 1rem 2rem;
        box-sizing: border-box;

        button {
            @include buttonDefaultStyling;
            background-color: $color-green-bright;
        }

        .sell-info {
            margin-top: $vertical-spacing-sm;
            font-size: $font-paragraph-sm;
            color: $color-grey-dark;
        }
    }
</style>