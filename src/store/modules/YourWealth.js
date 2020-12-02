const state = {
    wealth: 2198,
    perSecond: 0
}

const getters = {
    yourWealth: (state) => state.wealth,
    perSecond: (state) => state.perSecond
}

const actions = {
    
}

const mutations = {
    incrementWealthOnClick (state) {
        state.wealth++
    },
    updatePerSecond (state) {
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
    updatePerSecondScoreWithPurchase (state, points) {
        state.perSecond += points
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}