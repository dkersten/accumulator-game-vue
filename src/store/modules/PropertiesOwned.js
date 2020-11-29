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
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}