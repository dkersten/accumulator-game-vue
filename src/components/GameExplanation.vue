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
            // wealth stats
            localStorage.setItem('wealth', this.$store.getters.yourWealth)
            localStorage.setItem('perSecond', this.$store.getters.perSecond)
            localStorage.setItem('netWorth', this.$store.getters.netWorth)

            // business properties
            if (this.$store.getters.vendingMachine.numOwned !== 0) {
                localStorage.setItem('vendingMachine', JSON.stringify(this.$store.getters.vendingMachine))
            }

            if (this.$store.getters.foodCart.numOwned !== 0) {
                localStorage.setItem('foodCart', JSON.stringify(this.$store.getters.foodCart))
            }

            if (this.$store.getters.foodTruck.numOwned !== 0) {
                localStorage.setItem('foodTruck', JSON.stringify(this.$store.getters.foodTruck))
            }

            if (this.$store.getters.restaurant.numOwned !== 0) {
                localStorage.setItem('restaurant', JSON.stringify(this.$store.getters.restaurant))
            }

            if (this.$store.getters.franchise.numOwned !== 0) {
                localStorage.setItem('franchise', JSON.stringify(this.$store.getters.franchise))
            }

            // business upgrades
            if (this.$store.getters.ingredientsQuality.numOwned !== 0) {
                localStorage.setItem('ingredientsQuality', JSON.stringify(this.$store.getters.ingredientsQuality))
            }

            if (this.$store.getters.employeeTraining.numOwned !== 0) {
                localStorage.setItem('employeeTraining', JSON.stringify(this.$store.getters.employeeTraining))
            }

            if (this.$store.getters.smMarketing.numOwned !== 0) {
                localStorage.setItem('smMarketing', JSON.stringify(this.$store.getters.smMarketing))
            }

            if (this.$store.getters.printMarketing.numOwned !== 0) {
                localStorage.setItem('printMarketing', JSON.stringify(this.$store.getters.printMarketing))
            }

            if (this.$store.getters.tvMarketing.numOwned !== 0) {
                localStorage.setItem('tvMarketing', JSON.stringify(this.$store.getters.tvMarketing))
            }

            if (this.$store.getters.logisticsUpgrade.numOwned !== 0) {
                localStorage.setItem('logisticsUpgrade', JSON.stringify(this.$store.getters.logisticsUpgrade))
            }
            
            
        },
        clearProgress() {
            localStorage.clear()
            location.reload()
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