<template>
    <div class="inner-rwPerson-card-container">
        <div v-for="person in people" :key="person.rank" class="person-card" :class="person.wealtherThan ? 'more' : 'less'">
            <div class="left">
                <span class="rank">#{{person.rank}}</span>
                <h4>{{person.name}}</h4>
            </div>
            <div class="right">
                <span :class="person.wealtherThan ? 'more' : 'less'" class="net-worth">{{person.netWorthFormatted}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RWPersonCard",
    components: {

    },

    data() {
        return {
            people: [
                {
                    name: "Jeff Bezos",
                    rank: 1,
                    netWorth: 190900000000,
                    netWorthFormatted: this.formatNumbers(190900000000),
                    wealtherThan: false
                },
                {
                    name: "Bernard Arnault & family",
                    rank: 2,
                    netWorth: 114700000000,
                    netWorthFormatted: this.formatNumbers(114700000000),
                    wealtherThan: false
                },
                {
                    name: "Bill Gates",
                    rank: 3,
                    netWorth: 113600000000,
                    netWorthFormatted: this.formatNumbers(113600000000),
                    wealtherThan: false
                },
                {
                    name: "Mark Zuckerberg",
                    rank: 4,
                    netWorth: 103800000000,
                    netWorthFormatted: this.formatNumbers(103800000000),
                    wealtherThan: false
                },
                {
                    name: "Elon Musk",
                    rank: 5,
                    netWorth: 91700000000,
                    netWorthFormatted: this.formatNumbers(91700000000),
                    wealtherThan: false
                },
                {
                    name: "Mukesh Ambani",
                    rank: 6,
                    netWorth: 77500000000,
                    netWorthFormatted: this.formatNumbers(77500000000),
                    wealtherThan: false
                },
                {
                    name: "Warren Buffett",
                    rank: 7,
                    netWorth: 76600000000,
                    netWorthFormatted: this.formatNumbers(76600000000),
                    wealtherThan: false
                },
                {
                    name: "Larry Ellison",
                    rank: 8,
                    netWorth: 74800000000,
                    netWorthFormatted: this.formatNumbers(74800000000),
                    wealtherThan: false
                },
                {
                    name: "Steve Ballmer",
                    rank: 9,
                    netWorth: 70700000000,
                    netWorthFormatted: this.formatNumbers(70700000000),
                    wealtherThan: false
                },
                {
                    name: "Larry Page",
                    rank: 10,
                    netWorth: 70300000000,
                    netWorthFormatted: this.formatNumbers(70300000000),
                    wealtherThan: false
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
        formatNumbers: (num) => {
            const nwNum = num.toString()
            if (nwNum.length >= 7 && nwNum.length <= 9) {
                if (nwNum.length === 7) {
                    // first num, then 1 more
                    let numArr = nwNum.split('')
                    numArr = numArr.splice(0,2)
                    numArr.splice(1, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}M`

                } else if (nwNum.length === 8) {
                    // first 2 nums, then 1 more
                    let numArr = nwNum.split('')
                    numArr = numArr.splice(0,3)
                    numArr.splice(2, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}M`

                } else if (nwNum.length === 9) {
                    // first 3 nums, then 1 more
                    let numArr = nwNum.split('')
                    numArr = numArr.splice(0,4)
                    numArr.splice(3, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}M`

                }

            } else if (nwNum.length >= 10 && nwNum.length <= 12) {
                if (nwNum.length === 10) {
                    // first num, then 1 more
                    let numArr = nwNum.split('')
                    numArr = numArr.splice(0,2)
                    numArr.splice(1, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}B`

                } else if (nwNum.length === 11) {
                    // first 2 nums, then 1 more
                    let numArr = nwNum.split('')
                    numArr = numArr.splice(0,3)
                    numArr.splice(2, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}B`

                } else if (nwNum.length === 12) {
                    // first 3 nums, then 1 more
                    let numArr = nwNum.split('')
                    numArr = numArr.splice(0,4)
                    numArr.splice(3, 0, ".")
                    let numStr = numArr.join('')
                    return `$${numStr}B`

                }
            }
        },
        canPurchase() {
            for (const person of this.people) {
                if (this.yourWealth >= person.netWorth) {
                    person.wealtherThan = true
                } else {
                    person.wealtherThan = false
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

      &.less {
          background: $color-green-dark-disabled;
      }

      &.more {
          background: $color-green-dark;
      }

      span.rank {
        color: $color-green-bright;
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
        text-shadow: 0px 0px 2px rgba(255,255,255,.4);
      }

      span.net-worth.less {
        color: $color-red;
      }

      span.net-worth.more {
        color: $color-green-bright;
      }
    }

</style>