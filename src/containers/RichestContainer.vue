<template>
    <section class="richest-container">
        <h3>Net Worth</h3>
        <p>Compare your wealth to real people.</p>
        <RWPersonCard></RWPersonCard>
    </section>
</template>

<script>

import RWPersonCard from '../components/RWPersonCard'

export default {
    name: "RichestContainer",
    components: {
        RWPersonCard
    }
}
</script>

<style lang="scss" scoped>
    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .richest-container {

        @include section-styling;

        h3 {
            @include heading-styling-main;
            font-size: $font-paragraph-lg;

        }

        p {
            text-align: center;
            margin-bottom: $vertical-spacing-sm;
        }
    }
</style>