import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import wizard from './modules/wizard.store'
import installation from './modules/installation.store'

Vue.use(Vuex)

axios.defaults.baseURL =
  process.env.VUE_APP_BASE_PATH || 'http://akaunting-server/api'
axios.defaults.withCredentials = false

const store = new Vuex.Store({
  modules: {
    wizard,
    installation
  }
})

export default function init() {
  return store
}
