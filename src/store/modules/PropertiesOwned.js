const state = {
    totalPropertiesOwned: 0,
    vendingMachine: {
        name: 'Vending Machine',
        numOwned: 0,
        price: 200,
    },
    foodCart: {
        name: 'Food Cart',
        numOwned: 0,
        price: 50000,
    },
    foodTruck: {
        name: 'Food Truck',
        numOwned: 0,
        price: 100000,
    },
    restaurant: {
        name: 'Restaurant',
        numOwned: 0,
        price: 2000000,
    },
    franchise: {
        name: 'Franchise of Restaurants',
        numOwned: 0,
        price: 50000000,
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
            state.vendingMachine.numOwned += payload.num
            state.vendingMachine.price = payload.price
            console.log('Vending Machine', state.vendingMachine.numOwned, state.vendingMachine.price)
        }
        
        if (payload.name === 'Food Cart') {
            state.foodCart.numOwned += payload.num
            state.foodCart.price = payload.price
            console.log('Food Cart', state.foodCart.numOwned, state.foodCart.price)
        }
        
        if (payload.name === 'Food Truck') {
            state.foodTruck.numOwned += payload.num
            state.foodTruck.price = payload.price
            console.log('Food Truck', state.foodTruck.numOwned, state.foodTruck.price)
        }
        
        if (payload.name === 'Restaurant') {
            state.restaurant.numOwned += payload.num
            state.restaurant.price = payload.price
            console.log('Restaurant', state.restaurant.numOwned, state.restaurant.price)
        }
        
        if (payload.name === 'Franchise of Restaurants') {
            state.franchise.numOwned += payload.num
            state.franchise.price = payload.price
            console.log('Franchise of Restaurants', state.franchise.numOwned, state.franchise.price)
        }
    }
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}