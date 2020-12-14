const state = {
    priceSortingLowToHigh: true,
    filterByType: "all",
    filterByUtility: "all",
    filterByPurchase: "all"
}

const getters = {
    priceSorting: (state) => state.priceSortingLowToHigh,
    filterByType: (state) => state.filterByType,
    filterByUtility: (state) => state.filterByUtility,
    filterByPurchase: (state) => state.filterByPurchase
}

const actions = {

}

const mutations = {
    togglePriceSorting(state, boolVal) {
        state.priceSortingLowToHigh = boolVal
    },
    filterByType(state, type) {
        state.filterByType = type
    },
    filterByUtility(state, utility) {
        state.filterByUtility = utility
    },
    filterByPurchase(state, purchase) {
        state.filterByPurchase = purchase
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}