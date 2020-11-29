<template>
    <div>
        <div v-for="property in properties" :key="property.num" :class="property.canBuy ? 'more' : 'less'" class="rw-purchase-card">
            <div class="top">
                <div class="left">
                    <h3>{{property.title}}</h3>
                    <span class="cost">
                        Cost: $<span class="price">{{property.price.toLocaleString()}}</span>
                    </span>
                </div>
                <div class="right">
                    <span class="quantity">0</span>
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
                    showMoreInfo: false,
                    canBuy: true
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

    methods: {
      purchaseRWProperty(title) {
        for (const property of this.properties) {
            if (property.title === title) {
                if (this.yourWealth >= property.price) {
                    this.$store.commit('subtractRWPurchasePrice', property.price)
                } else {
                    console.log("you have no power here")
                }
            }
        }
      }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';
    @import '../assets/scss/mixins.scss';

    .rw-purchase-card {
      padding: 1rem;
      margin: 0 auto 1rem;
      max-width: 325px;
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
          color: $color-white;
          text-shadow: 0 0 5px $color-grey-dark;
          border: none;
          padding: 0.35rem 0.75rem;

          &:hover {
            cursor: pointer;
          }
        }

        button.buy.enabled {
          background: $color-green-bright;
        }

        button.buy.disabled {
          background: $color-red;
          cursor: not-allowed;
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