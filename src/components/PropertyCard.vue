<template>
    <div>
        <div v-for="property in this.properties" :key="property.name" :class="property.canBuy ? 'more' : 'less'" class="property">
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
                    <span
                        v-if="buyProperties"
                    >
                        <button
                            v-if="buyProperties10"
                            class="buy"
                            v-bind:class=" property.canBuy ? 'enabled' : 'disabled'"
                            :disabled="property.canBuy === false"
                            @click="purchase(property.name)"
                        >
                                Purchase 10
                        </button>
                        <button
                            v-else
                            class="buy"
                            v-bind:class=" property.canBuy ? 'enabled' : 'disabled'"
                            :disabled="property.canBuy === false"
                            @click="purchase(property.name)"
                        >
                                Purchase
                        </button>
                    </span>
                    <span
                        v-else
                    >
                        <button
                            :disabled="property.numOwned === 0"
                            class="sell"
                            v-bind:class="property.numOwned > 0 ? 'enabled' : 'disabled'"
                            @click="sellAll(property.name)"
                        >
                            Sell All
                        </button>
                    </span>
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

export default {
    name: "PropertyCard",
    components: {

    },
    
    data() {
        return {
            properties: [
                {
                    name: "Vending Machine",
                    price: 200,
                    initialPrice: 200,
                    numOwned: 0,
                    scorePerSecond: 4,
                    showMoreInfo: false,
                    canBuy: false,
                    totalCombinedPrice: 0
                },
                {
                    name: "Food Cart",
                    price: 50000,
                    initialPrice: 50000,
                    numOwned: 0,
                    scorePerSecond: 40,
                    showMoreInfo: false,
                    canBuy: false,
                    totalCombinedPrice: 0
                },
                {
                    name: "Food Truck",
                    price: 100000,
                    initialPrice: 100000,
                    numOwned: 0,
                    scorePerSecond: 75,
                    showMoreInfo: false,
                    canBuy: false,
                    totalCombinedPrice: 0
                },
                {
                    name: "Restaurant",
                    price: 2000000,
                    initialPrice: 2000000,
                    numOwned: 0,
                    scorePerSecond: 400,
                    showMoreInfo: false,
                    canBuy: false,
                    totalCombinedPrice: 0
                },
                {
                    name: "Franchise of Restaurants",
                    price: 50000000,
                    initialPrice: 50000000,
                    numOwned: 0,
                    scorePerSecond: 1000,
                    showMoreInfo: false,
                    canBuy: false,
                    totalCombinedPrice: 0
                }
            ],
            priceIncrease: 1.25,
            currentPropertyPrice: 0,
            currentPropertyNumOwned: 0
        }
    },

    computed: {
        yourWealth() {
            return this.$store.getters.yourWealth
        },

        buyProperties() {
            return this.$store.getters.buyProperties
        },
        buyProperties10() {
            return this.$store.getters.buyProperties10
        }
    },

    beforeMount() {
        this.canPurchase()
    },
    mounted() {

        if (localStorage.getItem('vendingMachine') !== null) {
            // get property from local storage and parse it via method below
            let vendingMachineLS = localStorage.getItem('vendingMachine')
            this.parseLocalStorageProperty(vendingMachineLS)

            // update state with info from local storage
            this.$store.commit('updateVendingStatsOnMount', {numOwned: this.currentPropertyNumOwned, price: this.currentPropertyPrice})
            
            // set property stats on card (UI) with info from state
            const vendingProperty = this.properties[0]
            vendingProperty.price = this.$store.getters.vendingMachine.price
            vendingProperty.numOwned = this.$store.getters.vendingMachine.numOwned

            // update can buy upgrades boolean in state
            this.$store.commit('showUpgrades')
        }

        if (localStorage.getItem('foodCart') !== null) {
            // get property from local storage and parse it via method below
            let foodCardLS = localStorage.getItem('foodCart')
            this.parseLocalStorageProperty(foodCardLS)

            // update state with info from local storage
            this.$store.commit('updateFoodCartOnMount', {numOwned: this.currentPropertyNumOwned, price: this.currentPropertyPrice})

            // set property stats on card (UI) with info from state
            const foodCartProperty = this.properties[1]
            foodCartProperty.price = this.$store.getters.foodCart.price
            foodCartProperty.numOwned = this.$store.getters.foodCart.numOwned

            // update can buy upgrades boolean in state
            this.$store.commit('showUpgrades')
        }

        if (localStorage.getItem('foodTruck') !== null) {
            // get property from local storage and parse it via method below
            let foodTruckLS = localStorage.getItem('foodTruck')
            this.parseLocalStorageProperty(foodTruckLS)

            // update state with info from local storage
            this.$store.commit('updateFoodTruckOnMount', {numOwned: this.currentPropertyNumOwned, price: this.currentPropertyPrice})

            // set property stats on card (UI) with info from state
            const foodTruckProperty = this.properties[2]
            foodTruckProperty.price = this.$store.getters.foodTruck.price
            foodTruckProperty.numOwned = this.$store.getters.foodTruck.numOwned

            // update can buy upgrades boolean in state
            this.$store.commit('showUpgrades')
        }

        if (localStorage.getItem('restaurant') !== null) {
            // get property from local storage and parse it via method below
            let restaurantLS = localStorage.getItem('restaurant')
            this.parseLocalStorageProperty(restaurantLS)

            // update state with info from local storage
            this.$store.commit('updateRestaurantOnMount', {numOwned: this.currentPropertyNumOwned, price: this.currentPropertyPrice})

            // set property stats on card (UI) with info from state
            const restaurantProperty = this.properties[3]
            restaurantProperty.price = this.$store.getters.restaurant.price
            restaurantProperty.numOwned = this.$store.getters.restaurant.numOwned

            // update can buy upgrades boolean in state
            this.$store.commit('showUpgrades')
        }

        if (localStorage.getItem('franchise') !== null) {
            // get property from local storage and parse it via method below
            let franchiseLS = localStorage.getItem('franchise')
            this.parseLocalStorageProperty(franchiseLS)

            // update state with info from local storage
            this.$store.commit('updateFranchiseOnMount', {numOwned: this.currentPropertyNumOwned, price: this.currentPropertyPrice})

            // set property stats on card (UI) with info from state
            const franchiseProperty = this.properties[4]
            franchiseProperty.price = this.$store.getters.franchise.price
            franchiseProperty.numOwned = this.$store.getters.franchise.numOwned

            // update can buy upgrades boolean in state
            this.$store.commit('showUpgrades')
        }
            
    },

    methods: {
        purchase(name) {
            for (const property of this.properties) {
                if (property.name === name) {
                    if (this.yourWealth >= property.price) {

                        // subtract property price from cash available
                        this.$store.commit('subtractPropertyPrice', property.price)
                        
                        // update total properties owned in state
                        if (this.$store.getters.buyProperties10) {
                            this.$store.commit('incrementTotalPropertiesOwned10')
                        } else {
                            this.$store.commit('incrementTotalPropertiesOwned')
                        }

                        // update score per second to state
                        if (this.$store.getters.buyProperties10) {
                            this.$store.commit('updatePerSecondScoreWithPurchase', (property.scorePerSecond * 10))
                        } else {
                            this.$store.commit('updatePerSecondScoreWithPurchase', property.scorePerSecond)
                        }

                        // update DOM of # of properties owned
                        if (this.$store.getters.buyProperties10) {
                            property.numOwned += 10
                        } else {
                            property.numOwned++
                        }

                        // track total price paid
                        property.totalCombinedPrice += property.price

                        // increase price of purchased property
                        if (this.$store.getters.buyProperties10) {
                            let totalPrice = property.price
                            for (let i = 0; i < 11; i++) {
                                totalPrice = Math.round(totalPrice * 1.25)
                            }
                            property.price = totalPrice
                        } else {
                            const newPrice = property.price * this.priceIncrease
                            property.price = Math.round(newPrice)
                        }

                        // set numOwned and price in state
                        if (this.$store.getters.buyProperties10) {
                            this.$store.commit('updatePropertyStats', {name: name, num: 10, price: property.price})
                        } else {
                            this.$store.commit('updatePropertyStats', {name: name, num: 1, price: property.price})
                        }

                        // update state to show business purchase upgrades
                        this.$store.commit('showUpgrades')

                    } else {
                        console.log("you have no power here")
                    }
                }
            }
        },

        sellAll(name) {
            for (const property of this.properties) {
                if (property.name === name) {

                    if (property.numOwned > 0) {
                        let amountToSell = Math.round(property.totalCombinedPrice * .8)

                        // add money to total money
                        this.$store.commit('adjustWealthOnBusinessSell', amountToSell)

                        // adjust persecond score
                        let perSecondAdjustment = (property.numOwned * property.scorePerSecond)
                        this.$store.commit('updatePerSecondScoreOnSell', perSecondAdjustment)

                        // adjust networth
                        let netWorthAdjustment = (property.totalCombinedPrice - amountToSell)
                        this.$store.commit('updatePerSecondNetWorthOnSell', netWorthAdjustment)

                        // reset num owned and total combined price
                        property.numOwned = 0
                        property.totalCombinedPrice = 0

                    }
                }
            }
        },

        canPurchase() {
            for (const property of this.properties) {
                if (this.yourWealth >= property.price) {
                    property.canBuy = true
                } else {
                    property.canBuy = false
                }
            }
        },

        setPrice() {
            
            if (this.buyProperties10) {
                for (const property of this.properties) {
                    let totalPrice = property.price
                    for (let i = 0; i < 10; i++) {
                        totalPrice = Math.round(totalPrice * 1.25)
                    }
                    property.price = totalPrice
                    this.canPurchase()
                }
            } else {
                for (const property of this.properties) {
                    if (property.numOwned === 0) {
                        property.price = property.initialPrice
                        this.canPurchase()
                    } else {
                        let totalPrice = property.initialPrice
                        for (let i = 0; i <= property.numOwned; i++) {
                            totalPrice = Math.round(totalPrice * 1.25)
                        }
                        property.price = totalPrice
                        this.canPurchase()
                    }
                }
            }
        },

        parseLocalStorageProperty(bProperty) {
            let businessProperty  = JSON.parse(bProperty)
            this.currentPropertyNumOwned = parseInt(businessProperty.numOwned)
            this.currentPropertyPrice = parseInt(businessProperty.price)
        },
    },

    watch: {
        yourWealth() {
            this.canPurchase()
        },
        buyProperties10() {
            this.setPrice()
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

        &.less {
            background: $color-green-dark-disabled;
        }

        &.more {
            background: $color-green-dark;
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
                @include buttonDefaultStyling;
            }

            button.sell {
                @include buttonDefaultStyling;
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