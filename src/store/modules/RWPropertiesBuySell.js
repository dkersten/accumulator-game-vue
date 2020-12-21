const state = {
    buyRWProperties: true
}

const getters = {
    buyRWProperties: (state) => state.buyRWProperties
}

const actions = {

}

const mutations = {
    toggleBuyRWProperties (state) {
        state.buyRWProperties = !state.buyRWProperties
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}