const state = {
    wealth: 10000,
    perSecond: 0,
    netWorth: 10000
}

const getters = {
    yourWealth: (state) => state.wealth,
    perSecond: (state) => state.perSecond,
    netWorth: (state) => state.netWorth,
}

const actions = {
    
}

const mutations = {
    ////// wealth mutations
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
    // Sell business properties
    adjustWealthOnBusinessSell (state, amount) {
        state.wealth += amount
    },
    adjustWealthOnRWPropertySell (state, amount) {
        state.wealth += amount
    },

    ////// per second score mutations
    updatePerSecondScoreWithPurchase (state, points) {
        state.perSecond += points
    },
    updatePerSecondScoreOnSell (state, points) {
        state.perSecond -= points
    },

    ////// Net worth mutations
    incrementNetWorthOnClick (state) {
        state.netWorth++
    },
    updatePerSecondWNetWorth (state) {
        state.netWorth += state.perSecond
    },
    updatePerSecondNetWorthOnSell (state, amount) {
        state.netWorth -= amount
    },

    /////// local storage mutations
    localStorageWealth (state) {
        state.wealth = parseInt(localStorage.wealth)
    },
    localStorageNetWorth (state) {
        state.netWorth = parseInt(localStorage.netWorth)
    }

}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}