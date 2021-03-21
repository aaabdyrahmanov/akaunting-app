/** installation.store.js */

import langauges from '@/assets/languages.json'

const actionName = {
  UPDATE_CURRENT_STEP: 'updateCurrentStep'
}

const mutationName = {
  SET_CURRENT_STEP: 'setCurrentStep',
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
