<template>
    <div>
        <div v-if="showUpgrades">
            <div v-for="purchase in purchases" :key="purchase.name" :class="purchase.canBuy ? 'more' : 'less'" class="purchase">
                <div class="top">
                    <div class="left">
                        <h3>{{purchase.name}}</h3>
                        <span class="cost">
                        Cost: $<span class="price">{{purchase.price.toLocaleString()}}</span>
                        </span>
                    </div>
                    <div class="right">
                        <span class="quantity">
                            {{purchase.numOwned.toLocaleString()}}
                        </span>
                    </div>
                </div>
                <div class="bottom">
                <div class="button-container">
                        <button 
                            v-on:click="purchase.showMoreInfo = !purchase.showMoreInfo"
                            class="more-info">
                                {{purchase.showMoreInfo ? 'Less Info' : 'More Info'}}
                        </button>
                        <button
                            class="buy"
                            v-bind:class=" purchase.canBuy ? 'enabled' : 'disabled'"
                            :disabled="purchase.canBuy === false"
                            @click="purchaseUpgrade(purchase.name)"
                        >
                            Purchase
                        </button>
                </div>
                <div v-show="purchase.showMoreInfo" class="more-info-container">
                    <ul>
                    <li>Increase dollars per second by <span class="dps-rate-food-cart">{{purchase.scorePerSecond}}</span></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="upgrade-notice">
                Make a property purchase to unlock all upgrades to your business. Purchasing upgrades will increase your money made automatically per second.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "PurchaseCard",
    components: {

    },

    data() {
        return {
            purchases: [
                {
                    name: "Increase Ingredients Quality",
                    price: 2000,
                    numOwned: 0,
                    scorePerSecond: 10,
                    showMoreInfo: false,
                    canBuy: true
                },
                {
                    name: "Employee Training",
                    price: 10000,
                    numOwned: 0,
                    scorePerSecond: 50,
                    showMoreInfo: false,
                    canBuy: true
                },
                {
                    name: "Social Media Marketing Campaign",
                    price: 25000,
                    numOwned: 0,
                    scorePerSecond: 72,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    name: "Print Marketing Campaign",
                    price: 60000,
                    numOwned: 0,
                    scorePerSecond: 95,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    name: "TV Marketing Campaign",
                    price: 100000,
                    numOwned: 0,
                    scorePerSecond: 117,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    name: "Upgrade Supply Chain Logistics",
                    price: 250000,
                    numOwned: 0,
                    scorePerSecond: 155,
                    showMoreInfo: false,
                    canBuy: false
                },
            ],
            showUpgrades: false
        }
    },

    computed: {
        yourWealth() {
            return this.$store.getters.yourWealth
        },
        totalProperties() {
            return this.$store.getters.totalPropertiesOwned
        }
    },

    methods: {
        purchaseUpgrade(name) {
            for (const purchase of this.purchases) {
                if (purchase.name === name) {
                    if (this.yourWealth >= purchase.price) {
                        // subtract upgrade price from cash available
                        this.$store.commit('subtractPurchasePrice', purchase.price)

                        // update total upgrades owned in state
                        this.$store.commit('incrementTotalUpgradesOwned')

                        // update DOM of # of upgrades owned
                        purchase.numOwned++
                    } else {
                        console.log("you have no power here")
                    }
                }
            }
        }
    },

    watch: {
        totalProperties() {
            if (this.totalProperties >= 1) {
                this.showUpgrades = true
            }
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    p.upgrade-notice {
        margin: auto;
        color: $color-red;
        max-width: 450px;
        text-align: center;
        line-height: 1.5;
        font-size: 1.15rem;
    }

    .purchase {
        margin-bottom: 1rem;
        padding: 1rem;

        &.less {
          background: $color-green-dark-disabled;
        }

        &.more {
            background: $color-green-dark;
        }

        .top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

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
    }

</style>