
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
        path: '/companies',
        name: 'companies',
        component: Home,
      },
      {
        path: '/currencies',
        name: 'currency',
        component: Home,
      },
      {
        path: '/taxes',
        name: 'taxes',
        component: Home,
      },
      {
        path: '/finish',
        name: 'finish',
        component: Home
      }
    ]
  })
}