import Vue from 'vue'
import './assets/css/reset.css'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

console.log(localStorage.getItem('vendingMachine'))
console.log(localStorage.getItem('foodCart'))
console.log(localStorage.getItem('foodTruck'))
console.log(localStorage.getItem('restaurant'))
console.log(localStorage.getItem('franchise'))