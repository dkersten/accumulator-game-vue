import Vuex from 'vuex'
import Vue from 'vue'
import YourWealth from './modules/YourWealth'

// Load Vuex
Vue.use(Vuex)

// create store
export default new Vuex.Store({
    modules: {
        YourWealth
    }
})