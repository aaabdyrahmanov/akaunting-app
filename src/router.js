import Vue from 'vue'
import Router from 'vue-router'

import Installation from '@/components/pages/Installation/Home'
import Login from '@/components/pages/Login/Home'
import Wizard from '@/components/pages/Wizard/Home'

Vue.use(Router)

export default function init() {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/wizard/company',
        name: 'Company',
        component: Wizard,
      },
      {
        path: '/wizard/currencies',
        name: 'Currencies',
        component: Wizard,
      },
      {
        path: '/wizard/taxes',
        name: 'Taxes',
        component: Wizard,
      },
      {
        path: '/wizard/finish',
        name: 'Finish',
        component: Wizard,
      },
      {
        path: '/installation/language',
        name: 'Language',
        component: Installation,
      },
      {
        path: '/installation/database',
        name: 'Database',
        component: Installation,
      },
      {
        path: '/installation/admin',
        name: 'Admin',
        component: Installation,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      }
    ]
  })
}