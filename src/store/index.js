/*jshint esversion: 6 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  // mutations:{
  //   updateRefreshTokens: function(state, response){
  //     console.log('Store Mutation', state);
  //     axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
  //     state.accessToken = response.data.access_token;
  //     state.refreshToken=response.data.refresh_token;
  //   }
  // }
});
export default store;