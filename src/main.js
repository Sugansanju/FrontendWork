// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*jshint esversion: 6 */
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

// import VueSweetalert2 from 'vue-sweetalert2';
// Vue.use(VueSweetalert2);

import VueSession from 'vue-session';
Vue.use(VueSession, {
  persist: true
});

import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import '@/assets/css/Glyphter.css';


Vue.config.productionTip = false;


import axios from 'axios';
// axios.defaults.baseURL = 'http://localhost:9898';
axios.defaults.baseURL = 'http://51.15.68.75';
// if (Store.state.tokens.token != '') {
//   console.log('Store State Tokens', Store.state.tokens.token);
//   axios.defaults.headers.common['Authorization'] = 'Bearer ' + Store.state.tokens.token;
// }
window.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // axios,
  store,
  components: { App },
  template: '<App/>'
});

