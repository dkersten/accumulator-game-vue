const state = {
    priceSortingLowToHigh: true
}

const getters = {
    priceSorting: (state) => state.priceSortingLowToHigh
}

const actions = {

}

const mutations = {
    togglePriceSorting(state, boolVal) {
        state.priceSortingLowToHigh = boolVal
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}