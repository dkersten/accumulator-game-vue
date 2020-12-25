const state = {
    buyProperties: true,
    buyProperties10: false
}

const getters = {
    buyProperties: (state) => state.buyProperties,
    buyProperties10: (state) => state.buyProperties10
}

const actions = {

}

const mutations = {
    toggleBuyProperties (state) {
        state.buyProperties = !state.buyProperties
    },
    toggleBuyProperties10 (state) {
        state.buyProperties10 = !state.buyProperties10
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}