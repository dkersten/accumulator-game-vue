const state = {
    totalRWUpgradesOwned: 0,
    rwPurchasesOwnedIDs: []
    // mansionBelAir: {
    //     title: "Mansion in Bel Air, Hollywood Hills Los Angeles, CA",
    //     id: 1,
    //     purchased: false
    // },
    // houseSantaMonica: {
    //     title: "Beach House, Santa Monica, CA",
    //     id: 2,
    //     purchased: false
    // },
    // mansionLaJolla: {
    //     title: "Mansion in La Jolla, San Diego, CA",
    //     id: 3,
    //     purchased: false
    // },
    // penthouseNY: {
    //     title: "Pethouse in NY, NY",
    //     id: 4,
    //     purchased: false
    // },
    // mansionBirdKey: {
    //     title: "Mansion on Bird Key, Sarasota, FL",
    //     id: 5,
    //     purchased: false
    // },
    // corvetteStingray: {
    //     title: "Chevrolet Corvette Stingray",
    //     id: 6,
    //     purchased: false
    // },
    // luxuryYacht: {
    //     title: "Luxury Yacht",
    //     id: 7,
    //     purchased: false
    // },
    // superYacht: {
    //     title: "Super Yacht",
    //     id: 8,
    //     purchased: false
    // },
    // privateJet: {
    //     title: "Private Jet (Gulfstream G550)",
    //     id: 9,
    //     purchased: false
    // },
    // buffaloSabres: {
    //     title: "Buffalo Sabres ⚔️",
    //     id: 10,
    //     purchased: false
    // },
    // buffaloBills: {
    //     title: "Buffalo Bills",
    //     id: 11,
    //     purchased: false
    // },
    // liverpoolFC: {
    //     title: "Liverpool FC 🔴",
    //     id: 12,
    //     purchased: false
    // },
    // privateIslandExuma: {
    //     title: "Private Island, Exuma, Bahamas",
    //     id: 13,
    //     purchased: false
    // },
    // privateIslandNelson: {
    //     title: "Private Island, Nelson, New Zealand",
    //     id: 14,
    //     purchased: false
    // },
    // privateChef: {
    //     title: "Private Chef",
    //     id: 15,
    //     purchased: false
    // },
    // personalTrainer: {
    //     title: "Personal Trainer",
    //     id: 16,
    //     purchased: false
    // },
    // condoAustin: {
    //     title: "Condo in Downtown Austin, TX",
    //     id: 17,
    //     purchased: false
    // },
    // townhomeChicago: {
    //     title: "Townhome in Chicago, IL",
    //     id: 18,
    //     purchased: false
    // },
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