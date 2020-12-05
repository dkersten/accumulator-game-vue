<template>
    <section class="rw-purchases">
        <h3>"Buy" Real World Things at Real World Prices <span class="more-info" @click="openModal">ℹ</span></h3>
        <div class="rw-purchases-container">
            <RWPurchaseCard></RWPurchaseCard>
            <modal-direction v-model="modalOpen"></modal-direction>
        </div>
    </section>
</template>

<script>

import RWPurchaseCard from '../components/RWPurchaseCard'
import ModalDirection from '../components/Modal'

export default {
    name: 'RWPurchases',
    components: {
        RWPurchaseCard,
        ModalDirection
    },

    data() {
        return {
            modalOpen: false
        }
    },

    methods: {
        openModal() {
            this.modalOpen = !this.modalOpen
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .rw-purchases {
        @include section-styling;

        h3 {
            @include heading-styling-main;
            font-size: $font-paragraph-lg;
        
            span.more-info {
                display: inline-block;
                padding: .2rem .4rem;
                color: $color-cream;
                background: $color-green-dark;
                border-radius: 3px;
                margin-left: .25rem;

                &:hover {
                    cursor: pointer;
                }
            }
        
        }
    }

</style>