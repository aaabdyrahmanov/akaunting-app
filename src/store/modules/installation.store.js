/** installation.store.js */

// import axios from 'axios'
import langauges from '@/assets/languages.json'

const actionName = {
  UPDATE_CURRENT_STEP: 'updateCurrentStep',
  UPDATE_FORM_API_KEY: 'updateFormAPIKey'
}

const mutationName = {
  SET_CURRENT_STEP: 'setCurrentStep',
  SET_FORM_API_KEY: 'setFormAPIKey',
  SET_FORM_TAX_NUMBER: 'setFormTaxNumber',
  SET_FORM_FINANCIAL_START_DATE: 'setFormFinancialStartDate',
  SET_FORM_ADDRESS: 'setFormAddress',
  FORWARD_CURRENT_STEP: 'forwardCurrentStep'
}

// State object
const state = {
  step: 0,
  headers: ['Language', 'Database', 'Admin'],
  language: {
    name: '',
    list: langauges
  },
  database: [
    {
      id: 'hostname',
      name: 'Hostname',
      value: '',
      placeholder: 'localhost',
      type: 'text',
      isRequired: true,
      isShowPassword: false,
      icon: 'fa-server',
    },
    {
      id: 'username',
      name: 'Username',
      value: '',
      placeholder: '',
      type: 'text',
      isRequired: true,
      isShowPassword: false,
      icon: 'fa-user',
    },
    {
      id: 'password',
      name: 'Password',
      value: '',
      placeholder: '',
      type: 'password',
      isRequired: false,
      isShowPassword: true,
      icon: 'fa-key',
    },
    {
      id: 'database',
      name: 'Database',
      value: '',
      placeholder: '',
      type: 'text',
      isRequired: true,
      isShowPassword: false,
      icon: 'fa-database',
    },
  ],
  admin: [
    {
      id: 'companyName',
      name: 'Company Name',
      value: '',
      placeholder: '',
      type: 'text',
      isRequired: true,
      isShowPassword: false,
      icon: 'fa-building',
    },
    {
      id: 'companyEmail',
      name: 'Company Email',
      value: '',
      placeholder: '',
      type: 'email',
      isRequired: true,
      isShowPassword: false,
      icon: 'fa-envelope',
    },
    {
      id: 'adminEmail',
      name: 'Admin Email',
      value: '',
      placeholder: '',
      type: 'email',
      isRequired: true,
      isShowPassword: true,
      icon: 'fa-envelope',
    },
    {
      id: 'adminPassword',
      name: 'Admin Password',
      value: '',
      placeholder: '',
      type: 'password',
      isRequired: true,
      isShowPassword: false,
      icon: 'fa-key',
    },
  ],
  login: [
    {
      id: 'email',
      name: '',
      value: 'cneytsenturk@gmail.com',
      placeholder: 'Email',
      type: 'email',
      isRequired: false,
      isShowPassword: false,
      icon: 'fa-envelope',
    },
    {
      id: 'password',
      name: '',
      value: 'akaunting',
      placeholder: 'Password',
      type: 'password',
      isShowPassword: true,
      isRequired: false,
      icon: 'fa-unlock-alt',
    },
  ],
}

// Getter functions
const getters = {
  getCurrentStep: (state) => {
    return state.step
  },
  getHeaders: (state) => {
    return state.headers
  },
  getLanguageForm: (state) => {
    return state.language
  },
  getDatabaseForm: (state) => {
    return state.database
  },
  getAdminForm: (state) => {
    return state.admin
  },
  getLoginForm: (state) => {
    return state.login
  }
}

// Actions
const actions = {
  [actionName.UPDATE_CURRENT_STEP]({ commit, state }, data) {
    if (
      data 
      || data === 0
    ) {
      commit('setCurrentStep', data)
    }
    else {
      commit('setCurrentStep', state.step + 1)
    }
  }
}

// Mutations
const mutations = {
  [mutationName.SET_CURRENT_STEP](state, step) {
    state.step = step
  },
  [mutationName.SET_FORM_TAX_NUMBER](state, taxNumber) {
    state.form.taxNumber = taxNumber
  },
  [mutationName.SET_FORM_FINANCIAL_START_DATE](state, financialStartDate) {
    state.form.financialStartDate = financialStartDate
  },
  [mutationName.SET_FORM_ADDRESS](state, address) {
    state.form.address = address
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
