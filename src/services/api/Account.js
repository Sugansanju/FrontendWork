// import axios from 'axios';

export default {

  login(user) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'oauth/token',
        headers: {
          'Authorization': 'Basic ' + btoa("barClientIdPassword:password"),
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          'grant_type': 'password',
          'username': user.contact,
          'password': user.password
        }
      }).then((response) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
        localStorage.setItem('isAuthenticated', true);
        resolve(response);
      }).catch((err) => {
        reject(err);
      });
    });

  },

  getUserInfo(contact) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: 'user/find/' + contact,
      }).then((response) => {
        resolve(response);
      }).catch((err) => {
        this.$session.destroy();
        localStorage.setItem('isAuthenticated', false);
        reject(err);
      });
    });
  },

  getAccessToken(refreshToken) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'oauth/token',
        headers: {
          'Authorization': 'Basic ' + btoa("barClientIdPassword:password"),
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        params: {
          'grant_type': 'refresh_token',
          'client_id': 'barClientIdPassword',
          'refresh_token': refreshToken
        }
      }).then((response) => {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
        localStorage.setItem('isAuthenticated', true);
        resolve(response);
      }).catch((err) => {
        reject(err);
      });
    });

  },
  logout(accessToken) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: 'oauth/token/revokeById/' + accessToken,
      }).then((response) => {
        localStorage.setItem('isAuthenticated', false);
        resolve(response);
      }).catch((err) => {
        reject(err);
      });
    });
  }
}
