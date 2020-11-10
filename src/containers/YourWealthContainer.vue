<template>
    <div class="squander-wealth-container">
        <h2>Squander Your Wealth... Its Fun</h2>
        <div class="inner-container">
            <RWPurchases></RWPurchases>
        </div>
    </div>
</template>

<script>

import RWPurchases from './RWPurchases'

export default {
    name: 'YourWealthContainer',
    components: {
        RWPurchases
    }
}

</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .squander-wealth-container {

        margin-top: $vertical-spacing-md;

        h2 {
            text-align: center;
            @include heading-styling-main;
            font-size: $font-header-sm;
            margin-bottom: $vertical-spacing-sm;
        }
    }
</style>