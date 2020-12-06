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
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';

    .filtering-container {
      margin: 0 auto $vertical-spacing-md;
      max-width: calc((325px * 3) + 10rem);

      .sorting-price {
        span {
          display: inline-block;
          margin-right: 1rem;
        }
      }
    }
</style>