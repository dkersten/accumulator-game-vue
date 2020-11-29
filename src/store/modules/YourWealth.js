const state = {
    wealth: 68500000,
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
        console.log("buying property")
        state.wealth -= propertyPrice
    },
    subtractPurchasePrice (state, propertyPrice) {
        console.log("buying upgrade")
        state.wealth -= propertyPrice
    },
    subtractRWPurchasePrice (state, rwPurchasePrice) {
        console.log("buying RW property")
        state.wealth -= rwPurchasePrice
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}