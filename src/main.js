import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from './router'
import store from './store'

import App from './App.vue';

Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store: store,
  el: '#app',
  render: h => h(App)
});