const state = {
    wealth: 100000000,
    perSecond: 0,
    netWorth: 100000000
}

const getters = {
    yourWealth: (state) => state.wealth,
    perSecond: (state) => state.perSecond,
    netWorth: (state) => state.netWorth,
}

const actions = {
    
}

const mutations = {
    // wealth mutations
    incrementWealthOnClick (state) {
        state.wealth++
    },
    updatePerSecondWealth (state) {
            state.wealth += state.perSecond
    },
    subtractPropertyPrice (state, propertyPrice) {
        state.wealth -= propertyPrice
    },
    subtractPurchasePrice (state, propertyPrice) {
        state.wealth -= propertyPrice
    },
    subtractRWPurchasePrice (state, rwPurchasePrice) {
        state.wealth -= rwPurchasePrice
    },

    // per second score mutations
    updatePerSecondScoreWithPurchase (state, points) {
        state.perSecond += points
    },

    // Net worth mutations
    incrementNetWorthOnClick (state) {
        state.netWorth++
    },
    updatePerSecondWNetWorth (state) {
        state.netWorth += state.perSecond
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}