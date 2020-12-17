const state = {
    buyProperties: true
}

const getters = {
    buyProperties: (state) => state.buyProperties
}

const actions = {

}

const mutations = {
    toggleBuyProperties (state) {
        state.buyProperties = !state.buyProperties
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}