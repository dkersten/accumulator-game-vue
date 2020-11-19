const state = {
    wealth: 0,
    perSecond: 1
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
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}