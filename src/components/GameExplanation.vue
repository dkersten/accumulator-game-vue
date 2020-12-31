<template>
    <div class="explanation-container">
        <h1>Wealth Accululator</h1>
        <p>Grow your wealth! Click the dollar bill to make money. Invest in properties to grow your wealth. Purchase upgrades to improve efficiency. Buy things you definitely don't need for fun and compare your wealth to real world people.</p>

        <button
            @click="saveProgress"
            class="btn save"
        >
            Save progress
        </button>
        <button
            @click="clearProgress"
            class="btn clear"
        >
            Clear progress
        </button>
    </div>
</template>

<script>
export default {
    name: 'GameExplanation',
    components: {

    },
    methods: {
        saveProgress() {
            // let wealth = this.$store.getters.yourWealth
            localStorage.setItem('wealth', this.$store.getters.yourWealth)
            localStorage.setItem('perSecond', this.$store.getters.perSecond)
            localStorage.setItem('netWorth', this.$store.getters.netWorth)
        },
        clearProgress() {
            localStorage.clear()
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .explanation-container {

        border-bottom: 1px solid $color-grey-dark;
        padding-bottom: $vertical-spacing-md;

        * {
            text-align: center;
            max-width: 450px;
            margin: auto;
        }

        h1 {
            @include heading-styling-main;
            font-size: 2rem;
            margin-bottom: $vertical-spacing-sm;
        }

        p {
            line-height: $line-height-paragraph;
            font-size: $font-paragraph-sm;
            color: $color-grey-dark;
        }

        button {
            @include buttonDefaultStyling;
            background: $color-green-bright;
            margin: $vertical-spacing-sm auto 0;
            display: block;
        }
    }

</style>