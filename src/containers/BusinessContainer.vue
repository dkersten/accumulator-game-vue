<template>
    <div class="main-container">
        <StatsContainer></StatsContainer>
        <PropertiesContianer></PropertiesContianer>
        <PurchaseContainer></PurchaseContainer>
    </div>
</template>

<script>

import StatsContainer from '../containers/StatsContainer'
import PropertiesContianer from './PropertiesContainer'
import PurchaseContainer from './PurchaseContainer'

export default {

    name: "BusinessContainer",
    components: {
        StatsContainer,
        PropertiesContianer,
        PurchaseContainer
    }

}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';

    .main-container {
        margin-top: $vertical-spacing-md;
        border-bottom: 1px solid $color-grey-dark;
        padding-bottom: $vertical-spacing-xs;
    }

    @media only screen and (min-width: 800px) and (max-width: 1239px) {
    .main-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;

        .stats-container {
            flex-basis: 100%;
        }

        .property-container,
        .purchase-container {
            flex-basis: calc(45%);
        }
    }
    }

    @media only screen and (min-width: 1240px) {
        .main-container {
            display: flex;
            justify-content: space-around;
            align-items: flex-start;

            > * {
            min-width: 350px;
            margin: 0 1rem;
            }
        }
    }
</style>