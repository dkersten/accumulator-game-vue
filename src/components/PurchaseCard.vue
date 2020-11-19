<template>
    <div>
        <div v-for="purchase in purchases" :key="purchase.name" class="purchase">
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
                <button class="more-info hidden">
                  More Info <i class="fal fa-angle-down"></i>
                </button>
                <button class="buy">
                  Purchase
                </button>
              </div>
              <div class="more-info-container">
                <ul>
                  <li>Increase dollars per second by <span class="dps-rate-food-cart">{{purchase.scorePerSecond}}</span></li>
                </ul>
              </div>
            </div>
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
                    scorePerSecond: 10
                },
                {
                    name: "Employee Training",
                    price: 10000,
                    numOwned: 0,
                    scorePerSecond: 50
                },
                {
                    name: "Social Media Marketing Campaign",
                    price: 25000,
                    numOwned: 0,
                    scorePerSecond: 72
                },
                {
                    name: "Print Marketing Campaign",
                    price: 60000,
                    numOwned: 0,
                    scorePerSecond: 95
                },
                {
                    name: "TV Marketing Campaign",
                    price: 100000,
                    numOwned: 0,
                    scorePerSecond: 117
                },
                {
                    name: "Upgrade Supply Chain Logistics",
                    price: 250000,
                    numOwned: 0,
                    scorePerSecond: 155
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .purchase {
        background: $color-green-dark;
        margin-bottom: 1rem;
        padding: 1rem;

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