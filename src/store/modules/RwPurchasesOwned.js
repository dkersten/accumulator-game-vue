const state = {
    totalRWUpgradesOwned: 0
}

const getters = {
    totalRWUpgradesOwned: (state) => state.totalRWUpgradesOwned
}

const actions = {

}

const mutations = {
    incrementTotalRWUpgradesOwned(state) {
        state.totalRWUpgradesOwned++
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}