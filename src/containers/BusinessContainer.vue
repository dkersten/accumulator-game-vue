<template>
    <div class="main-container">
        <StatsContainer></StatsContainer>
    </div>
</template>

<script>

import StatsContainer from '../containers/StatsContainer'

export default {

    name: "BusinessContainer",
    components: {
        StatsContainer
    }

}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';

    .main-container {
        margin-top: $vertical-spacing-md;
    }

    @media only screen and (min-width: 800px) and (max-width: 1239px) {
    .main-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

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