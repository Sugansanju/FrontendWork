/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    // access_token: this.$session.exists('access_token') ? this.$session.get('access_token') : '',
    instituteDetails: [],
  },
  actions: {
    addInstituteDetail(context, data) {
      console.log('action method called', data);
      // return new Promise((resolve, reject) => {
      context.commit('updateDetails', data);
      // });
    },
  },
  mutations: {
    updateDetails: function (state, data) {
      console.log('mutation method called', data);
      // state.instituteDetails = data;
      state.instituteDetails.push(data);
    }
  },
});
export default store;
