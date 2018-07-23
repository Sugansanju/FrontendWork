export default {
       isValidEmail(email){
            let re=/^([a-z0-9_\-.])+@([a-z0-9_\-.])+\.([a-z]{2,4})$/;
            return re.test(email);
      },
      isValidPhone(phone){
            let re=/^([0-9]{12})$/;
            return re.test(phone);
      },

}
