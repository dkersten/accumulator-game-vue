<template>
  <div class="container">
        <div class="filtering-container">
            <div class="inner-filtering-container">
                <div class="sorting-price">
                    <span>Sort by Price</span>
                    <select @change="sortPriceChange($event)" name="byPrice" id="byPrice">
                        <option value="lowToHigh">Low to High</option>
                        <option value="highToLow">High to Low</option>
                    </select>
                </div>
                <div class="filter-by-type">
                    <span>Filter by Type</span>
                    <select @change="filterByType($event)" name="byType" id="byType">
                        <option value="all">All Categories</option>
                        <option value="real estate">Real Estate</option>
                        <option value="sports">Sports Teams</option>
                        <option value="transportation">Transportation</option>
                        <option value="misc">Misc</option>
                    </select>
                </div>
                <div class="filter-by-utility">
                    <span>Filter by utility </span>
                    <select @change="filterByUtility($event)" name="byType" id="byType">
                        <option value="all">All</option>
                        <option value="investment">Return on investment</option>
                        <option value="fun">No ROI, just for fun</option>
                    </select>
                </div>
                <div class="filter-by-purchased">
                    <span>Filter by Owned Properties </span>
                    <select @change="filterByPurchase($event)" name="byPurchase" id="byPurchase">
                        <option value="all">All</option>
                        <option value="purchased">Already Purchased</option>
                        <option value="purchase">Not Yet Purchased</option>
                    </select>
                </div>
            </div>
        </div>
  </div>
</template>

<script>

export default {
    name: "RWPurchasesSorting",

    methods: {
        sortPriceChange(event) {
            if (event.target.value === "lowToHigh") {
                this.$store.commit('togglePriceSorting', true)
            } else {
                this.$store.commit('togglePriceSorting', false)
            }
        },

        filterByType(event) {
            this.$store.commit('filterByType', event.target.value)
        },

        filterByUtility(event) {
            this.$store.commit('filterByUtility', event.target.value)
        },

        filterByPurchase(event) {
            this.$store.commit('filterByPurchase', event.target.value)
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';

    .filtering-container {
      margin: 0 auto $vertical-spacing-md;
      max-width: calc((325px * 3) + 10rem);

      .inner-filtering-container {
          display: flex;
          flex-wrap: wrap;

          > div {
              margin-right: 2rem;
          }
      }

        span {
            display: inline-block;
            margin-right: .5rem;
        }

    }
</style>