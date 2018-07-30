export default {
  createClazz(instituteId, data) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
         "tenant-uuid":instituteId,
        }
      };
      axios.post("clazz/create/" + instituteId, data, config)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });

  },
  getClazzDetails(instituteId) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          "tenant-uuid": instituteId,
        }
      };
      axios.get('clazz/get/' + instituteId, config)
        .then((response) => {
          resolve(response);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}