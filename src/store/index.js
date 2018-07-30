/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // access_token: this.$session.exists('access_token') ? this.$session.get('access_token') : '',
    instituteDetails: [],
    clazzDetails:[],
  },
  actions: {
    addInstituteDetail(context, data) {
      console.log('action method called', data);
      context.commit('updateInstituteDetails', data);
    },
    addClazzDetail(context, data) {
      console.log('action method called', data);
      context.commit('updateClazzDetails', data);
    },
  },
  mutations: {
    updateInstituteDetails: function (state, data) {
      console.log('mutation method called', data);
      state.instituteDetails.splice(0);
      state.instituteDetails.push(data);
    },
    updateClazzDetails: function (state, data) {
      console.log('mutation method called', data);
      state.clazzDetails.splice(0);
      state.clazzDetails.push(data);
    }
    },
});
export default store;
