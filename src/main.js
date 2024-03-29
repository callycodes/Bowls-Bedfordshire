import Vue from 'vue'
import App from './App.vue'

import router from './router'

import { db } from "./firebase"

import store from "./store"

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

import './assets/css/global.css'

new Vue({
  db,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
