const state = {
    totalUpgradesOwned: 0,
    showUpgrades: false
}

const getters = {
    totalUpgradesOwned: (state) => state.totalUpgradesOwned,
    showUpgrades: (state) => state.showUpgrades
}

const actions = {

}

const mutations = {
    incrementTotalUpgradesOwned(state) {
        state.totalUpgradesOwned++
    },
    showUpgrades(state) {
        state.showUpgrades = true
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}