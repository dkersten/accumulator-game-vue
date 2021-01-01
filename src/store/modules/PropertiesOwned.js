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
        numOwned: 0,
        price: 0,
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
    },
    updatePropertyStats(state, payload) {
        if (payload.name === 'Vending Machine') {
            state.vendingMachine.numOwned = payload.num
            state.vendingMachine.price = payload.price
            console.log(state.vendingMachine.price, state.vendingMachine.numOwned)

        } else if (payload.name === 'Food Cart') {
            state.foodCart.numOwned = payload.num
            state.foodCart.price = payload.price
            console.log(state.foodCart.price, state.foodCart.numOwned)

        } else if (payload.name === 'Food Truck') {
            state.foodTruck.numOwned = payload.num
            state.foodTruck.price = payload.price
            console.log(state.foodTruck.price, state.foodTruck.numOwned)

        } else if (payload.name === 'Restaurant') {
            state.restaurant.numOwned = payload.num
            state.restaurant.price = payload.price
            console.log(state.restaurant.price, state.restaurant.numOwned)

        } else if (payload.name === 'Franchise of Restaurants') {
            state.franchise.numOwned = payload.num
            state.franchise.price = payload.price
            console.log(state.franchise.price, state.franchise.numOwned)
        }
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}