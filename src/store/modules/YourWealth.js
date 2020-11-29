const state = {
    wealth: 200,
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
        console.log("buying")
        state.wealth -= propertyPrice
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}