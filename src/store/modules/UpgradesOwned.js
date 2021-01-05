const state = {
    totalUpgradesOwned: 0,
    showUpgrades: false,
    ingredientsQuality: {
        name: 'Increase Ingredients Quality',
        numOwned: 0,
        price: 2000
    },
    employeeTraining: {
        name: 'Employee Training',
        numOwned: 0,
        price: 10000
    },
    smMarketing: {
        name: 'Social Media Marketing Campaign',
        numOwned: 0,
        price: 25000
    },
    printMarketing: {
        name: 'Print Marketing Campaign',
        numOwned: 0,
        price: 60000
    },
    tvMarketing: {
        name: 'TV Marketing Campaign',
        numOwned: 0,
        price: 100000
    },
    logisticsUpgrade: {
        name: 'Upgrade Supply Chain Logistics',
        numOwned: 0,
        price: 250000
    },
}

const getters = {
    totalUpgradesOwned: (state) => state.totalUpgradesOwned,
    showUpgrades: (state) => state.showUpgrades,
    ingredientsQuality: (state) => state.ingredientsQuality,
    employeeTraining: (state) => state.employeeTraining,
    smMarketing: (state) => state.smMarketing,
    printMarketing: (state) => state.printMarketing,
    tvMarketing: (state) => state.tvMarketing,
    logisticsUpgrade: (state) => state.logisticsUpgrade
}

const actions = {

}

const mutations = {
    incrementTotalUpgradesOwned(state) {
        state.totalUpgradesOwned++
    },

    showUpgrades(state) {
        state.showUpgrades = true
    },

    updateBusinessUpgradeStats(state, payload) {
        if (payload.name === 'Increase Ingredients Quality') {
            state.ingredientsQuality.numOwned += payload.num
            state.ingredientsQuality.price = payload.price
        }

        if (payload.name === 'Employee Training') {
            state.employeeTraining.numOwned += payload.num
            state.employeeTraining.price = payload.price
        }

        if (payload.name === 'Social Media Marketing Campaign') {
            state.smMarketing.numOwned += payload.num
            state.smMarketing.price = payload.price
        }

        if (payload.name === 'Print Marketing Campaign') {
            state.printMarketing.numOwned += payload.num
            state.printMarketing.price = payload.price
        }

        if (payload.name === 'TV Marketing Campaign') {
            state.tvMarketing.numOwned += payload.num
            state.tvMarketing.price = payload.price
        }

        if (payload.name === 'Upgrade Supply Chain Logistics') {
            state.logisticsUpgrade.numOwned += payload.num
            state.logisticsUpgrade.price = payload.price
        }
    },

    updateIngredientsQualityOnMount(state, payload) {
        state.ingredientsQuality.price = payload.price
        state.ingredientsQuality.numOwned = payload.numOwned
    },

    updateEmployeeTrainingOnMount(state, payload) {
        state.employeeTraining.price = payload.price
        state.employeeTraining.numOwned = payload.numOwned
    },

    updateSmMarketingOnMount(state, payload) {
        state.smMarketing.price = payload.price
        state.smMarketing.numOwned = payload.numOwned
    },

    updatePrintMarketingOnMount(state, payload) {
        state.printMarketing.price = payload.price
        state.printMarketing.numOwned = payload.numOwned
    },

    updateTvMarketingOnMount(state, payload) {
        state.tvMarketing.price = payload.price
        state.tvMarketing.numOwned = payload.numOwned
    },

    updateLogisticsUpgradeOnMount(state, payload) {
        state.logisticsUpgrade.price = payload.price
        state.logisticsUpgrade.numOwned = payload.numOwned
    },
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}