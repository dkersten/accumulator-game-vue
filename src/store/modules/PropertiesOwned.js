const state = {
    totalPropertiesOwned: 0,
    vendingMachine: {
        numOwned: 0,
        price: 0,
    },
    foodCart: {
        numOwned: 0,
        price: 0,
    },
    foodTruck: {
        numOwned: 0,
        price: 0,
    },
    restaurant: {
        numOwned: 0,
        price: 0,
    },
    franchise: {
        numOwned: 10,
        price: 200,
    }
}

const getters = {
    totalPropertiesOwned: (state) => state.totalPropertiesOwned,
    vendingMachine: (state) => state.vendingMachine,
    foodCart: (state) => state.foodCart,
    foodTruck: (state) => state.foodTruck,
    restaurant: (state) => state.restaurant,
    franchise: (state) => state.franchise
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