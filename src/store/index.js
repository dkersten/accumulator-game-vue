import Vuex from 'vuex'
import Vue from 'vue'
import YourWealth from './modules/YourWealth'
import PropertiesOwned from './modules/PropertiesOwned'

// Load Vuex
Vue.use(Vuex)

// create store
export default new Vuex.Store({
    modules: {
        YourWealth,
        PropertiesOwned
    }
})