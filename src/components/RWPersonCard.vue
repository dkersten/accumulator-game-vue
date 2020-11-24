<template>
    <div>
        <div v-for="property in properties" :key="property.rank" class="person-card" :class="property.wealtherThan ? 'more' : 'less'">
            <div class="left">
                <span class="rank">#{{property.rank}}</span>
                <h4>{{property.name}}</h4>
            </div>
            <div class="right">
                <span :class="property.wealtherThan ? 'more' : 'less'" class="net-worth">{{property.netWorth.toLocaleString()}}</span>
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
            properties: [
                {
                    name: "Jeff Bezos",
                    rank: 1,
                    netWorth: this.formatNumbers(190900000000),
                    wealtherThan: false
                },
                {
                    name: "Bernard Arnault & family",
                    rank: 2,
                    netWorth: this.formatNumbers(114700000000),
                    wealtherThan: false
                },
                {
                    name: "Bill Gates",
                    rank: 3,
                    netWorth: this.formatNumbers(113600000000),
                    wealtherThan: false
                },
                {
                    name: "Mark Zuckerberg",
                    rank: 4,
                    netWorth: this.formatNumbers(103800000000),
                    wealtherThan: false
                },
                {
                    name: "Elon Musk",
                    rank: 5,
                    netWorth: this.formatNumbers(91700000000),
                    wealtherThan: false
                },
                {
                    name: "Mukesh Ambani",
                    rank: 6,
                    netWorth: this.formatNumbers(77500000000),
                    wealtherThan: false
                },
                {
                    name: "Warren Buffett",
                    rank: 7,
                    netWorth: this.formatNumbers(76600000000),
                    wealtherThan: false
                },
                {
                    name: "Larry Ellison",
                    rank: 8,
                    netWorth: this.formatNumbers(74800000000),
                    wealtherThan: false
                },
                {
                    name: "Steve Ballmer",
                    rank: 9,
                    netWorth: this.formatNumbers(70700000000),
                    wealtherThan: false
                },
                {
                    name: "Larry Page",
                    rank: 10,
                    netWorth: this.formatNumbers(70300000000),
                    wealtherThan: true
                }
            ]
        }
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
        }
    }
}
</script>

<style lang="scss" scoped>

    @import '../assets/scss/variables.scss';

    .person-card {
      padding: 1rem;
      margin: 0 auto 1rem;
      max-width: 325px;
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