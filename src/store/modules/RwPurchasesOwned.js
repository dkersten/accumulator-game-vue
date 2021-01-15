const state = {
    totalRWUpgradesOwned: 0,
    rwPurchasesOwnedIDs: []
}

const getters = {
    totalRWUpgradesOwned: (state) => state.totalRWUpgradesOwned,
    rwPurchasesOwnedIDs: (state) => state.rwPurchasesOwnedIDs
}

const actions = {

}

const mutations = {
    incrementTotalRWUpgradesOwned(state) {
        state.totalRWUpgradesOwned++
    },
    addRWPurchaseID(state, id) {
        if (!state.rwPurchasesOwnedIDs.includes(id)) {
            state.rwPurchasesOwnedIDs.push(id)
        }
    },
    removeRWPurchaseID(state, id) {
        if (state.rwPurchasesOwnedIDs.includes(id)) {
            const updatedArray = state.rwPurchasesOwnedIDs.filter(item => item !== id)
            state.rwPurchasesOwnedIDs = updatedArray
        }
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}