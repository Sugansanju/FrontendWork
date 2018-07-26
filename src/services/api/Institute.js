// import axios from 'axios';

export default {
  createInstitute(uuid, data) {
    return new Promise((resolve, reject) => {
      axios.post("institute/create/" + uuid, data)
      .then((response)=>{
        resolve(response);
      })
      .catch((err)=>{
        reject(err);
      });
    });
    
  },
  getInstituteDetails(uuid) {
    return new Promise((resolve, reject) => {
        axios.get('institute/get/' + uuid)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });    
  }
}
