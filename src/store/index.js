import Vuex from 'vuex'
import Vue from 'vue'
import YourWealth from './modules/YourWealth'
import PropertiesOwned from './modules/PropertiesOwned'
import UpgradesOwned from './modules/UpgradesOwned'
import RwPurchasesOwned from './modules/RwPurchasesOwned'

// Load Vuex
Vue.use(Vuex)

// create store
export default new Vuex.Store({
    modules: {
        YourWealth,
        PropertiesOwned,
        UpgradesOwned,
        RwPurchasesOwned
    }
})