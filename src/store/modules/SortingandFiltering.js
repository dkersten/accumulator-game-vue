const state = {
    priceSortingLowToHigh: true,
    filterByType: "all"
}

const getters = {
    priceSorting: (state) => state.priceSortingLowToHigh,
    filterByType: (state) => state.filterByType
}

const actions = {

}

const mutations = {
    togglePriceSorting(state, boolVal) {
        state.priceSortingLowToHigh = boolVal
    },
    filterByType(state, type) {
        state.filterByType = type
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}