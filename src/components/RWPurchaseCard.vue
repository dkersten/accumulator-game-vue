<template>
    <div class="inner-rwCard-container">
        <div v-for="property in properties" :key="property.num" :class="property.canBuy ? 'more' : 'less'" class="rw-purchase-card">
            <div class="top">
                <div class="left">
                    <h3>{{property.title}}</h3>
                    <span class="cost">
                        Cost: $<span class="price">{{property.price.toLocaleString()}}</span>
                    </span>
                </div>
                <div class="right">
                    <span class="quantity">{{property.numOwned}}</span>
                </div>
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
                        @click="purchaseRWProperty(property.title)"
                    >
                        Purchase
                    </button>
                </div>
                <div v-show="property.showMoreInfo" class="more-info-container">
                    <ul>
                        <li v-for="feature in property.features" :key="feature">
                            {{feature}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RWPurchaseCard',
    components: {

    },

    data() {
        return {
            properties: [
                {
                    num: 1,
                    title: "Mansion in Bel Air, Hollywood Hills Los Angeles, CA",
                    price: 67500000,
                    features: [
                        "12 bedrooms, 25 bathrooms",
                        "Includes 60 parking spaces",
                        "Private pool, spa, and gym",
                        "Tennis court, golf putting green, and 2 lane bowling alley on premises",
                        "Home theater and wine cellar on premises"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    num: 2,
                    title: "Beach House, Santa Monica, CA",
                    price: 5995000,
                    features: [
                        "4 bedrooms, 4 bathrooms",
                        "Located along the boardwalk just north of the Pier of Malibu",
                        "180 degree views of the beach and Pacific Ocean",
                        "4 parking spaces in an attached garage"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    num: 3,
                    title: "Mansion in La Jolla, San Diego, CA",
                    price: 26900000,
                    features: [
                        "4 bedrooms, 6 bathrooms",
                        "Oceanfront beach house on the white sands of La Jolla Shores",
                        "Private views of the Pacific Ocean",
                        "4 Car Attached Garage",
                        "1275 square foot deck facing the ocean"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    num: 4,
                    title: "Pethouse in NY, NY",
                    price: 90000000,
                    features: [
                        "6 bedrooms, 8 bathrooms",
                        "82nd floor Penthouse 3 blocks from Central Park",
                        "360 degree views of NYC",
                        "Indoor pool, fitness center, spa and other amenities on premises"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    num: 5,
                    title: "Mansion on Bird Key, Sarasota, FL",
                    price: 6500000,
                    features: [
                        "4 bedrooms, 6 bathrooms",
                        "Waterfront property with private dock",
                        "Private swimming pool and hot tub overlooking the water",
                        "Access to community clubhouse and tennis courts"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    num: 6,
                    title: "Chevrolet Corvette Stingray",
                    price: 10,
                    features: [
                        "3LT, Convertible",
                        "6.2L V8 DI engine",
                        "8-speed dual clutch transmission"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    num: 7,
                    title: "Luxury Yacht",
                    price: 2499000,
                    features: [
                        "118 foot Luxury motor yacht",
                        "Features a main salon, bar, and entertainment center",
                        "Accommodations for up to 10 guests",
                        "Five staterooms complete with en-suite bath with shower"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    num: 8,
                    title: "Super Yacht",
                    price: 180869339,
                    features: [
                        "300 foot super yacht",
                        "Features a bar, jacuzzi, gym, sauna, and more",
                        "Space for up to 22 guests and 31 crew members",
                        "11 luxury suites"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    num: 9,
                    title: "Private Jet (Gulfstream G550)",
                    price: 15250000,
                    features: [
                        "Room for up to 18 passengers",
                        "Multiple Cabin Configuration Options",
                        "Equipped with a microwave, convection oven, cooler cabinet, and coffee maker"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    num: 10,
                    title: "Buffalo Sabres ⚔️",
                    price: 400000000,
                    features: [
                      "Increase dollars per second by 5000",
                        "No Stanley Cups 😞",
                        "Implement a competent hockey ops department",
                        "Actually bring the fans enjoyment",
                        "Win a Cup and become a legend in Buffalo",
                        "Core in place: Eichel, Dahlin, Cozens, one lightly used Okposo"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false,
                    perSecond: 5000
                },
                {
                    num: 11,
                    title: "Buffalo Bills",
                    price: 2050000000,
                    features: [
                        "Increase dollars per second by 10000",
                        "No Super Bowls 😞",
                        "Finally bring success to the long suffering fans",
                        "Competent front office and coaching staff",
                        "Perfect if you like hard counts and running down the clock starting immediately after halftime",
                        "Win a SB and become a legend in Buffalo",
                        "Core in place: Allen, White, Diggs, and Edmonds",
                        "Warning: be prepared to build a new stadium"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false,
                    scorePerSecond: 10000
                },
                {
                    num: 12,
                    title: "Liverpool FC 🔴",
                    price: 2183000000,
                    features: [
                        "Increase dollars per second by 12000",
                        "Most successful club in England",
                        "19 League titles, 6 European Cups, 7 FA Cups, 3 UEFA Cups, 4 UEFA Super Cups, 1 FIFA Club World Cup, 8 League Cups, 15 Charity/Community Shields",
                        "Newly upgraded stadium, the historic Anfield",
                        "Brand new training ground (Kirkby)",
                        "Personally fund Mbappe 2020/21 and Haaland 2021/2022",
                        "Comes with the best manager in the world",
                        "Warning: keep Michael Edwards at the club or watch your investment plummet",
                        "Warning: annoying neighbors across Stanley Park"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false,
                    scorePerSecond: 12000
                },
                {
                    num: 13,
                    title: "Private Island, Exuma, Bahamas",
                    price: 8600000,
                    features: [
                        "30 acre private island ",
                        "Enjoy a white sand beach, lush native vegetation, and varied elevations",
                        "Situated 700 feet from popular Staniel Cay",
                        "Close to many popular tourist attractions",
                        "Easily accessible via Staniel Cay's airstrip or 18 slip marina"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                },
                {
                    num: 14,
                    title: "Private Island, Nelson, New Zealand",
                    price: 11313017,
                    features: [
                        "1287 acre private island ",
                        "9 bedroom, 3 bath residence",
                        "Features rolling paddocks, native bush, sea, cliffs, and beaches",
                        "Year round temperate climate"
                    ],
                    numOwned: 0,
                    showMoreInfo: false,
                    canBuy: false
                }
            ]
        }
    },

    computed: {
      yourWealth() {
        return this.$store.getters.yourWealth
      }
    },

    beforeMount() {
        this.canPurchase()
    },

    methods: {
      purchaseRWProperty(title) {
        for (const property of this.properties) {
            if (property.title === title) {
                if (this.yourWealth >= property.price) {
                  // subtract RW property price from cash available
                  this.$store.commit('subtractRWPurchasePrice', property.price)

                  // update total RW properties owned in state
                  this.$store.commit('incrementTotalRWUpgradesOwned')

                  // update per scond score in state
                  if (property.scorePerSecond) {
                    this.$store.commit('updatePerSecondScoreWithPurchase', property.scorePerSecond)
                  }

                  // update DOM of # of rw properties owned
                  property.numOwned++
                } else {
                    console.log("you have no power here")
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
      }
    },

    watch: {
      yourWealth() {
        this.canPurchase()
      }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .inner-rwCard-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .rw-purchase-card {
      padding: 1rem;
      margin: 0 1rem 1rem;
      width: 325px;
      box-shadow: $box-shadow-sm-subtle;

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

        .left {
          h3 {
            color: $color-cream;
            font-weight: 700;
            letter-spacing: 1px;
            font-size: 1.15rem;
            margin-bottom: 0.75rem;
          }

          .cost {
            color: $color-cream;
            font-weight: 700;
          }
        }

        .right {
          margin-left: 0.5rem;
          .quantity {
            font-weight: 700;
            font-size: 2rem;
            color: $color-cream;
          }
        }
      }

      .bottom {
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

        .more-info-container {
          &.hide {
            display: none;
          }

          &.show {
            display: block;
          }

          width: 90%;
          margin: 1rem auto 0;
          * {
            color: $color-cream;
          }

          ul {
            text-align: left;
            list-style: disc;

            li:not(:last-of-type) {
              margin-bottom: 0.35rem;
            }
          }
        }
      }
    }

</style>