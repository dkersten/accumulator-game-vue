<template>
    <div>
        <div v-for="property in properties" :key="property.rank" class="person-card">
            <div class="left">
                <span class="rank">#{{property.rank}}</span>
                <h4>{{property.name}}</h4>
            </div>
            <div class="right">
                <span class="net-worth">${{property.netWorth.toLocaleString()}}</span>
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
                    netWorth: 190900000000
                },
                {
                    name: "Bernard Arnault & family",
                    rank: 2,
                    netWorth: 114700000000
                },
                {
                    name: "Bill Gates",
                    rank: 3,
                    netWorth: 113600000000
                },
                {
                    name: "Mark Zuckerberg",
                    rank: 4,
                    netWorth: 103800000000
                },
                {
                    name: "Elon Musk",
                    rank: 5,
                    netWorth: 91700000000
                },
                {
                    name: "Mukesh Ambani",
                    rank: 6,
                    netWorth: 77500000000
                },
                {
                    name: "Warren Buffett",
                    rank: 7,
                    netWorth: 76600000000
                },
                {
                    name: "Larry Ellison",
                    rank: 8,
                    netWorth: 74800000000
                },
                {
                    name: "Steve Ballmer",
                    rank: 9,
                    netWorth: 70700000000
                },
                {
                    name: "Larry Page",
                    rank: 10,
                    netWorth: 70300000000
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
      background: $color-green-dark;
      display: flex;
      justify-content: space-between;
      align-items: center;

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
      }

      span.net-worth.less {
        color: $color-red;
      }

      span.net-worth.more {
        color: $color-green-bright;
      }
    }

</style>