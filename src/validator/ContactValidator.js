export default {
  isValidEmail(email) {

  },
  isValidMobile(mobile) {
    {
      var phoneno = /^\d{10}$/;
      if (mobile.value.match(phoneno)) {
        return true;
      }
      else {
        alert("Not a valid Phone Number");
        return false;
      }
    }
  }

}
