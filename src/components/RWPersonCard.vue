<template>
    <div>
        <div class="inner-rwPerson-card-container" v-if="people.length > 0">
            <div
                v-for="person in people"
                :key="person['rank']"
                class="person-card"
                :class="person['wealtherThan'] ? 'more' : 'less'"
            >
                <div class="left">
                    <span class="rank">#{{person['rank']}}</span>
                    <h4>{{person['personName']}}</h4>
                </div>
                <div class="right">
                    <span :class="person['wealtherThan'] ? 'more' : 'less'" class="net-worth">{{ formatNumbers(person['finalWorth']) }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RWPersonCard",
    components: {

    },

    mounted() {
        // comment out when using manual data
        this.$set(this.$store.dispatch('fetchRichest'))
    },

    data() {
        return {
            // don't need when using computed value for people
            // people: []
        }
    },

    computed: {
        yourWealth() {
            return this.$store.getters.yourWealth
        },
        people() {
            return this.$store.getters.people
        }
    },

    methods: {
        formatNumbers(num) {
            let strNum = num.toString()
            strNum = strNum + '000'
            let formattedNum = strNum.replace('.', '')

            if (formattedNum.length >= 7 && formattedNum.length <= 9) {
                if (formattedNum.length === 7) {
                    // first num, then 1 more
                    let numArr = formattedNum.split('')
                    numArr = numArr.splice(0,2)
                    numArr.splice(1, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}M`

                } else if (formattedNum.length === 8) {
                    // first 2 nums, then 1 more
                    let numArr = formattedNum.split('')
                    numArr = numArr.splice(0,3)
                    numArr.splice(2, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}M`

                } else if (formattedNum.length === 9) {
                    // first 3 nums, then 1 more
                    let numArr = formattedNum.split('')
                    numArr = numArr.splice(0,4)
                    numArr.splice(3, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}M`

                }

            } else if (formattedNum.length >= 10 && formattedNum.length <= 12) {
                if (formattedNum.length === 10) {
                    // first num, then 1 more
                    let numArr = formattedNum.split('')
                    numArr = numArr.splice(0,2)
                    numArr.splice(1, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}B`

                } else if (formattedNum.length === 11) {
                    // first 2 nums, then 1 more
                    let numArr = formattedNum.split('')
                    numArr = numArr.splice(0,3)
                    numArr.splice(2, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}B`

                } else if (formattedNum.length === 12) {
                    // first 3 nums, then 1 more
                    let numArr = formattedNum.split('')
                    numArr = numArr.splice(0,4)
                    numArr.splice(3, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}B`

                }
            }
        },
        // wealtherThanPerson() {
        //     for (const person of this.people) {
        //         let wealth = person['finalWorth']
        //         wealth = wealth.toString()
        //         wealth = wealth + '000'
        //         wealth = wealth.replace('.', '')
        //         wealth = parseInt(wealth)

        //         if (this.yourWealth >= wealth) {
                    
        //             person["wealtherThan"] = true
        //         } else {
        //             person["wealtherThan"] = false
        //         }
        //     }
        // },
    },
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';

    .inner-rwPerson-card-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .person-card {
      padding: 1rem;
      margin: 0 1rem 1rem;
      width: 325px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: $color-green-dark;

      /* &.less {
          background: $color-green-dark-disabled;
      }

      &.more {
          background: $color-green-dark;
      } */

      span.rank {
        color: $color-cream;
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: 1px;
        margin-bottom: 1rem;
        display: inline-block;
      }

      h4 {
        font-size: 1.25rem;
        color: $color-cream;
        line-height: 1.3;
      }

      .right {
        margin-left: 0.5rem;
      }

      span.net-worth {
        font-size: 1.25rem;
        font-weight: 700;
        color: $color-cream;
        /* text-shadow: 0px 0px 2px rgba(255,255,255,.4); */
      }

      /* span.net-worth.less {
        color: $color-red;
      }

      span.net-worth.more {
        color: $color-green-bright;
      } */
    }

</style>