<template>
    <div>
        <div v-for="property in properties" :key="property.name" class="property">
            <div class="left">
                <h3>{{property.name}}</h3>
                <span class="cost">
                    Cost: $<span class="price">{{property.price.toLocaleString()}}</span>
                </span>
            </div>
            <div class="right">
                <span class="quantity">
                    {{property.numOwned}}
                </span>
            </div>
            <div class="bottom">
                <div class="button-container">
                    <button 
                        v-on:click="property.showMoreInfo = !property.showMoreInfo"
                        class="more-info">
                            {{property.showMoreInfo ? 'Less Info' : 'More Info'}}
                    </button>
                    <button
                        class="buy"
                        v-bind:class=" property.canBuy ? 'enabled' : 'disabled'"
                        :disabled="property.canBuy === false"
                        @click="testPurchase()"
                    >
                            Purchase
                    </button>
                </div>
                <div v-show="property.showMoreInfo" class="more-info-container ">
                    <ul>
                        <li>Increase dollars per second by <span class="dps-rate-vending">{{property.scorePerSecond}}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

// import { mapGetters } from 'vuex'

export default {
    name: "PropertyCard",
    components: {

    },
    
    data() {
        return {
            properties: [
                {
                    name: "Vending Machine",
                    price: 10,
                    numOwned: 0,
                    scorePerSecond: 4,
                    showMoreInfo: false,
                    canBuy: true
                },
                {
                    name: "Food Cart",
                    price: 100,
                    numOwned: 0,
                    scorePerSecond: 40,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    name: "Food Truck",
                    price: 1000,
                    numOwned: 0,
                    scorePerSecond: 75,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    name: "Restaurant",
                    price: 1000,
                    numOwned: 0,
                    scorePerSecond: 400,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    name: "Franchise of Restaurants",
                    price: 10000,
                    numOwned: 0,
                    scorePerSecond: 1000,
                    showMoreInfo: false,
                    canBuy: false
                }
            ]
        }
    },

    computed: {
        

    },

    methods: {
        testPurchase: () => {
            alert("boom")
        },
        checkPurchase: () => {
            // console.log(yourWealth)
            // for (const property of this.properties) {
            //     if (this.$store.state.yourWealth >= property.price) {
            //         console.log("can buy")
            //     }
            // }
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .property {
        background: $color-green-dark;
        margin-bottom: 1rem;
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .bottom {
            flex-basis: 100%;
            margin-top: 1rem;
            text-align: center;

            .button-container {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
            }

            button.more-info {
                background: none;
                color: $color-cream;
                border: none;

                &:hover {
                    cursor: pointer;
                }
            }

            button.buy {
                color: $color-white;
                text-shadow: 0 0 5px $color-grey-dark;
                border: none;
                padding: 0.35rem 0.75rem;

                &:hover {
                    cursor: pointer;
                }

                &.enabled {
                    background: $color-green-bright;
                }

                &.disabled {
                    background: $color-red;
                    cursor: not-allowed;
                }
            }

            .more-info-container {
                &.hide {
                    display: none;
                }

                &.show {
                    display: block;
                }

                width: 80%;
                margin: 1rem auto 0;

                * {
                    color: $color-cream;
                }

                ul {
                    text-align: left;
                    list-style: disc;
                }
            }
        }
    }

    h3 {
        font-size: 1.15rem;
        font-weight: 700;
        color: $color-cream;
        letter-spacing: 1px;
        margin-bottom: 0.75rem;
    }

    span.cost {
        color: $color-cream;
    }

    span.quantity {
        font-weight: 700;
        font-size: 2rem;
        color: $color-green-bright;
    }

</style>