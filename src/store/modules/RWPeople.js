import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const state = {
    people: []
    // see people.js in assets for manual data
    // people: [
    //     // data from people.js here
    // ]
}

const getters = {
    people: (state) => state.people
}

const actions = {
    // comment out fetch request when using manual data
    fetchRichest ({ commit }) {
        Vue.axios.get('https://forbes400.herokuapp.com/api/forbes400?limit=10')
            .then((response) => {
                // console.log(response.data)
                commit('fetchRequest', response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }
}

const mutations = {
    fetchRequest (state, people) {
        state.people = people
    } 
}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}