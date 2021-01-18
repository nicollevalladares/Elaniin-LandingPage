import Vue from 'vue'
import App from './App/App.vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
// import 'bootstrap/scss/bootstrap.scss';
import './App/custom.scss'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap.bundle.min'

import { store } from './store'
import { router } from './router'

Vue.use(Vuex)
Vue.use(axios)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
