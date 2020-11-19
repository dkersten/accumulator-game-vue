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
                    <button class="more-info hidden">
                    More Info <i class="fal fa-angle-down"></i>
                    </button>
                    <button class="buy">
                    Purchase
                    </button>
                </div>
                <div class="more-info-container ">
                    <ul>
                        <li>Increase dollars per second by <span class="dps-rate-vending">{{property.scorePerSecond}}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
                    scorePerSecond: 4
                },
                {
                    name: "Food Cart",
                    price: 100,
                    numOwned: 0,
                    scorePerSecond: 40
                },
                {
                    name: "Food Truck",
                    price: 1000,
                    numOwned: 0,
                    scorePerSecond: 75
                },
                {
                    name: "Restaurant",
                    price: 1000,
                    numOwned: 0,
                    scorePerSecond: 400
                },
                {
                    name: "Franchise of Restaurants",
                    price: 10000,
                    numOwned: 0,
                    scorePerSecond: 1000
                }
            ]
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