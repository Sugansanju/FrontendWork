// import axios from 'axios';

export default {

  login(user){
    return axios({
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
    }).then((response)=>{
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
      return response;
    });
  },

  getUserInfo(contact){
    return  axios({
      method: 'get',
      url: 'user/find/' + contact,
    }).then((response)=>{
      return response;
    });
  },

  getAccessToken(refreshToken){
    return axios(
      {
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
        return response;
    });
  },
  logout(accessToken){
    return axios({
      method: 'post',
      url: 'oauth/token/revokeById/'+ accessToken,
    }).then((response)=>{
      return response;
    });
  }
}
