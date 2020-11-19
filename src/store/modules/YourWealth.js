const state = {
    wealth: 0
}

const getters = {
    yourWealth: (state) => state.wealth
}

const actions = {
    
}

const mutations = {
    incrementWealthOnClick (state) {
        state.wealth++
    } 
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}