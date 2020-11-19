<template>
    <section class="property-container">
        <h3>Properties</h3>
        <div class="properties-container">
            <PropertyCard></PropertyCard>
        </div>
    </section>
</template>

<script>

import PropertyCard from '../components/PropertyCard'

export default {
    name: 'PropertiesContianer',
    components: {
        PropertyCard
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .property-container {
        @include section-styling;

        h3 {
            @include heading-styling-main;
            font-size: $font-header-sm;
            margin-bottom: $vertical-spacing-md;
        }

        .properties-container {
            max-width: 325px;
            margin-left: auto;
            margin-right: auto;
        }
    }
</style>