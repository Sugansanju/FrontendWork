// import axios from 'axios';

export default {
  createInstitute(uuid, data) {
    return axios.post("institute/create/"+uuid, data);
  },
  getInstituteDetails(uuid) {
    console.log("calling");
    return axios.get('institute/get/' +uuid);
  }
}
