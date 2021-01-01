import Vue from 'vue'
import App from './App.vue'

import './assets/common.less'

import dataV from '@jiaminghi/data-view'
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.withCredentials = true
Vue.prototype.axios = axios
Vue.use(dataV)
axios.defaults.withCredentials=true,
Vue.prototype.apiUrl = {
  carCount: 'http://192.168.1.102:8080/api/CarSell',
  carSell:'http://192.168.1.102:8080/api/SellCar',
  carMaintain:'http://192.168.1.102:8080/api/CarMaintain'
}
new Vue({
  render: h => h(App)
}).$mount('#app')
