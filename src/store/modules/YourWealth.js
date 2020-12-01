const state = {
    wealth: 67499997,
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
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}