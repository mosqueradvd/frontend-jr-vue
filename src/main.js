import Vue from 'vue'
import App from './App.vue'
import { makeServer } from './server'
import VueApexCharts from 'vue-apexcharts'

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') makeServer()

new Vue({
  render: (h) => h(App)
}).$mount('#app')
