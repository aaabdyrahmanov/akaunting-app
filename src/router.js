import Vue from 'vue'
import Router from 'vue-router'

import Home from './App.vue'

Vue.use(Router)

export default function init(store) {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/wizard/company',
        name: 'Company',
        component: Home,
      },
      {
        path: '/wizard/currencies',
        name: 'Currencies',
        component: Home,
      },
      {
        path: '/wizard/taxes',
        name: 'Taxes',
        component: Home,
      },
      {
        path: '/wizard/finish',
        name: 'Finish',
        component: Home,
      },
      {
        path: '/installation/language',
        name: 'Language',
        component: Home,
      },
      {
        path: '/installation/database',
        name: 'Database',
        component: Home,
      },
      {
        path: '/installation/admin',
        name: 'Admin',
        component: Home,
      },
      {
        path: '/login',
        name: 'Login',
        component: Home,
      }
    ]
  })
}