<template>
    <section class="purchase-container">
        <h3>Purchase</h3>
        <div class="purchases-container">
            <PurchaseCard></PurchaseCard>
        </div>
    </section>
</template>

<script>

import PurchaseCard from '../components/PurchaseCard'

export default {
    name: 'PurchaseContainer',
    components: {
        PurchaseCard
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .purchase-container {
        @include section-styling;

        h3 {
            @include heading-styling-main;
            font-size: $font-header-sm;
            margin-bottom: $vertical-spacing-md;
        }

        .purchases-container {
            max-width: 325px;
            margin-left: auto;
            margin-right: auto;
        }
    }

</style>