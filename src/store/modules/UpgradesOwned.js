const state = {
    totalUpgradesOwned: 0
}

const getters = {
    totalUpgradesOwned: (state) => state.totalUpgradesOwned
}

const actions = {

}

const mutations = {
    incrementTotalUpgradesOwned(state) {
        state.totalUpgradesOwned++
        console.log(state.totalUpgradesOwned)
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}