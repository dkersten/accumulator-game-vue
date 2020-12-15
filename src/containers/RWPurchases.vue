<template>
    <section class="rw-purchases">
        <h3>"Buy" Real World Things at Real World Prices 
            <span class="more-info tooltip" @click="openModal">
                ℹ
                <span class="tooltiptext">More info</span>
            </span>
            <button
                class="info more"
                v-if="seeMore"
                @click="showMore"
            >
                See More
            </button>
            <button 
                class="info less"
                v-else
                @click="showMore"
            >
                See Less
            </button>
        </h3>
        <div class="rw-purchases-container">
            <div
                class="show-hide-container"
                :class="seeMore ? 'hide' : 'show'"
            >
                <RWPurchasesSorting></RWPurchasesSorting>
                <RWPurchaseCard></RWPurchaseCard>
            </div>
            <modal-direction v-model="modalOpen"></modal-direction>
        </div>
    </section>
</template>

<script>

import RWPurchaseCard from '../components/RWPurchaseCard'
import ModalDirection from '../components/Modal'
import RWPurchasesSorting from '../components/RWPurchasesSorting'

export default {
    name: 'RWPurchases',
    components: {
        RWPurchaseCard,
        ModalDirection,
        RWPurchasesSorting
    },

    data() {
        return {
            modalOpen: false,
            seeMore: false
        }
    },

    methods: {
        openModal() {
            this.modalOpen = !this.modalOpen
        },

        showMore() {
            this.seeMore = !this.seeMore
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
                color: $color-grey-dark;
                background: $color-grey-info;
                border-radius: 3px;
                margin-left: .25rem;
                position: relative;

                &:hover {
                    cursor: pointer;
                }
            }
        
        }

        .tooltip .tooltiptext {
            visibility: hidden;
            width: 120px;
            background-color: $color-grey-info;
            color: $color-grey-dark;
            text-align: center;
            padding: 5px 0;
            border-radius: 6px;
            position: absolute;
            z-index: 1;
            bottom: 125%;
            left: 50%;
            margin-left: -60px;
            opacity: 0;
            transition: opacity 0.3s;
        }

        .tooltip .tooltiptext::after {
            content: "";
            position: absolute;
            top: 100%;
            left: 50%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: $color-grey-info transparent transparent transparent;
        }

        .tooltip:hover .tooltiptext {
            visibility: visible;
            opacity: 1;
        }

        .info {
            font-size: .9rem;
            display: inline-block;
            margin-left: 1rem;
            @include buttonDefaultStyling;
            background: $color-grey-info;
            color: $color-grey-dark;
            text-shadow: 0 0 2px #fff;

            &:hover {
                cursor: pointer;
            }
        }

        .show-hide-container {

            &.show {
                display: block;
            }

            &.hide {
                display: none;
            }
        }
    }

</style>