import Vuex from 'vuex'
import Vue from 'vue'
import YourWealth from './modules/YourWealth'
import PropertiesOwned from './modules/PropertiesOwned'
import UpgradesOwned from './modules/UpgradesOwned'
import RwPurchasesOwned from './modules/RwPurchasesOwned'
import SortingandFiltering from './modules/SortingandFiltering'
import RWPeople from './modules/RWPeople'
import PropertiesBuySell from './modules/PropertiesBuySell'
import RWPRopertiesBuySell from './modules/RWPropertiesBuySell'

// Load Vuex
Vue.use(Vuex)

// create store
export default new Vuex.Store({
    modules: {
        YourWealth,
        PropertiesOwned,
        UpgradesOwned,
        RwPurchasesOwned,
        SortingandFiltering,
        RWPeople,
        PropertiesBuySell,
        RWPRopertiesBuySell
    }
})