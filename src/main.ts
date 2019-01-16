import './assets/css/reset.css';
import './assets/css/common.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import { HgsRestApi } from './api/types/generated/client/ClientApis';

Vue.config.productionTip = false;

HgsRestApi.setBaseServerUrl('http://localhost:8080');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
