/** wizard.store.js */

// import axios from 'axios'

const actionName = {
  UPDATE_CURRENT_STEP: 'updateCurrentStep',
  UPDATE_FORM_API_KEY: 'updateFormAPIKey',
  POST_COMPANY_DATA: 'postCompanyData',
}

const mutationName = {
  SET_CURRENT_STEP: 'setCurrentStep',
  SET_CURRENT_STEPP: 'setCurrentStepp',
  SET_FORM_API_KEY: 'setFormAPIKey',
  SET_FORM_TAX_NUMBER: 'setFormTaxNumber',
  SET_FORM_FINANCIAL_START_DATE: 'setFormFinancialStartDate',
  SET_FORM_ADDRESS: 'setFormAddress',
  SET_COMPANY_DATA: 'setCompanyData',
  SET_CURRENCIES_DATA: 'setCurrenciesData',
}

// State object
const state = { 
  step: 0,
  headers: ['Company', 'Currencies', 'Taxes', 'Finish'],
  homePageUrl: 'https://app.akaunting.com',
  form: {
    apiKey: '6cb1e3ac-f566-48db-beba-6101e280f126',
    taxNumber: '',
    financialStartDate: '',
    address: '',
  },
  currenciesData: [
    {
      name: 'British Pound',
      code: 'GBP',
      rate: '1.6',
      isEnabled: 'Yes',
      actions: 'Edit/Delete',
    },
    {
      name: 'Euro',
      code: 'EUR',
      rate: '1.25',
      isEnabled: 'Yes',
      actions: 'Edit/Delete',
    },
    {
      name: 'Turkish Lira',
      code: 'TRY',
      rate: '0.8',
      isEnabled: 'Yes',
      actions: 'Edit/Delete',
    },
    {
      name: 'US Dollar',
      code: 'USD',
      rate: '1',
      isEnabled: 'Yes',
      actions: 'Edit/Delete',
    },
  ],
  recommendedApps: [
    {
      name: 'OneSignal',
      logoSource: '254-mehmet-coban/onesignal/onesignal-logo.jpg',
      stars: 12,
      price: '$29',
    },
    {
      name: 'Stripe',
      logoSource: '4-akaunting-inc/stripe/stripe-logo.png',
      stars: 14,
      price: '$49',
    },
    {
      name: 'PayFlexi',
      logoSource: '1203-payflexi/payflexi/payflexi-akaunting.png',
      stars: 20,
      price: 'Free',
    },
    {
      name: 'PayPal Express',
      logoSource:
        '54-mark-britto/paypal-express/paypal-express-checkout-logo.png',
      stars: 8,
      price: '$49',
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
  getFormApiKey: (state) => {
    return state.form.apiKey
  },
  getFormRegistrationDate: (state) => {
    return state.form.registrationDate
  },
}

// Actions
const actions = {
  [actionName.UPDATE_CURRENT_STEP]({ commit }, data) {
    commit('setCurrentStep', data)
  },
  [actionName.UPDATE_COMPANY_API_KEY]({ commit }, data) {
    commit('setCompanyAPIKey', data)
  },
  async [actionName.POST_COMPANY_DATA]({ commit }, data) {
    // await axios.post('/company', data)
  },
}

// Mutations
const mutations = {
  [mutationName.SET_CURRENT_STEPP](state, step) {
    state.step = step
  },
  [mutationName.SET_CURRENT_STEP](state, stepDirection) {
    state.step += stepDirection
  },
  [mutationName.SET_FORM_API_KEY](state, apiKey) {
    state.form.apiKey = apiKey
  },
  [mutationName.SET_FORM_TAX_NUMBER](state, taxNumber) {
    state.form.taxNumber = taxNumber
  },
  [mutationName.SET_FORM_FINANCIAL_START_DATE](state, financialStartDate) {
    state.form.financialStartDate = financialStartDate
  },
  [mutationName.SET_FORM_ADDRESS](state, address) {
    state.form.address = address
  },
  [mutationName.SET_CURRENCIES_DATA](state, currency) {
    state.currenciesData = [...state.currenciesData, currency]
  },
  [mutationName.SET_COMPANY_DATA](state, { companyApiKey, registrationDate }) {
    state.form.apiKey = companyApiKey
    state.form.financialStartDate = registrationDate
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
