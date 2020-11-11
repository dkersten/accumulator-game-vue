<template>
    <section class="rw-purchases">
        <h3>"Buy" Real World Things at Real World Prices</h3>
        <div class="rw-purchases-container">
            <RWPurchaseCard></RWPurchaseCard>
        </div>
    </section>
</template>

<script>

import RWPurchaseCard from '../components/RWPurchaseCard'

export default {
    name: 'RWPurchases',
    components: {
        RWPurchaseCard
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .rw-purchases {
        @include section-styling;
        margin-left: auto;
        margin-right: auto;

        h3 {
            @include heading-styling-main;
            text-align: center;
            margin-bottom: $vertical-spacing-md;
        }

        .rw-purchases-container {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

</style>