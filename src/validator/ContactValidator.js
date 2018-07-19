export default {
       isValidEmail(email){
            let re=/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
            return re.test(email);
      },
      isValidPhone(phone){
            let re=/^([0-9]{12})|(\([0-9]{3}\)+[0-9]{3}\-[0-9]{4})$/;
            return re.test(phone);
      },

}
