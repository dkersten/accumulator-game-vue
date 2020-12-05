<template>
    <div class="squander-wealth-container">
        <h2>Squander Your Wealth... Its Fun</h2>
        <div class="inner-container">
            <RWPurchases></RWPurchases>
            <RichestContainer></RichestContainer>
        </div>
    </div>
</template>

<script>

import RWPurchases from './RWPurchases';
import RichestContainer from './RichestContainer';

export default {
    name: 'YourWealthContainer',
    components: {
        RWPurchases,
        RichestContainer
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

    @media only screen and (min-width: 900px) {
        .inner-container {
            display: flex;
            flex-wrap: wrap;

            > * {
                flex-basis: 100%;
            }
        }
    }
</style>