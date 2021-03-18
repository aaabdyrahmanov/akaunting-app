import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    step: 0,
    companyApiKey: '6cb1e3ac-f566-48db-beba-6101e280f126',
    companyRegistrationDate: '1607598845833'
  },
  mutations: {
    setCurrentStep: (state, stepDirection) => {
      state.step += stepDirection
    },
    setCompanyAPIKey: (state, apiKey) => {
      state.companyApiKey = apiKey
    },
    setCompanyData: (state, data) => {
      state.companyApiKey = data.companyApiKey
      state.companyRegistrationDate = data.registrationDate
    }
  },
  actions: {
    updateCurrentStep ({ commit }, data) {
      commit('setCurrentStep', data)
    },
    updateCompanyAPIKey ({ commit }, data) {
      commit('setCompanyAPIKey', data)
    },
    async postCompanyData ({ commit }, data) {
      try {
        await axios.post('http://akaunting-server/api/company', data)        
        commit('setCompanyData', data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  getters: {
    getCurrentStep: (state) => {
      return state.step
    },
    getCompanyApiKey: (state) => {
      return state.companyApiKey
    },
    getCompanyRegistrationDate: (state) => {
      return state.companyRegistrationDate
    }
  }
})

export default store
