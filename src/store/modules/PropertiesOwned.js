const state = {
    totalPropertiesOwned: 0
}

const getters = {
    totalPropertiesOwned: (state) => state.totalPropertiesOwned
}

const actions = {

}

const mutations = {
    incrementTotalPropertiesOwned(state) {
        state.totalPropertiesOwned++
    },
    incrementTotalPropertiesOwned10(state) {
        state.totalPropertiesOwned += 10
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}