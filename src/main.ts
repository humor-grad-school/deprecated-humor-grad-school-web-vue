import './assets/css/reset.css';
import './assets/css/common.css';

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import { HgsRestApi } from './api/types/generated/client/ClientApis';
import { setGrahQLBaseServerUrl } from './api/fetchGraphQL';

Vue.config.productionTip = false;

const baseServerUrl = 'http://localhost:8080';
HgsRestApi.setBaseServerUrl(baseServerUrl);
setGrahQLBaseServerUrl(baseServerUrl);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
