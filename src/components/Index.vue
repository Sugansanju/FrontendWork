<template>
  <div>
    <main-header></main-header>
    <page-footer></page-footer>
    <b-container>
      <b-row>
        <b-col cols="6" class="text-center" style="margin-top: 10%">
          <img src="/static/images/classrom.png">
          <h1> Happier Classrooms</h1>
          <h3>The simple way to build an amazing classroom community</h3>
        </b-col>
        <b-col style="margin-top: 10%">
          <div class="card card-style">
            <div class="card-body text-center">
              <form @submit.prevent="login(user)">
                 <!-- @keyup.enter="$event.target.nextElementSibling.focus()" -->
        <input  class="form-control input"
                type="text"
                autofocus
                placeholder="Email/Mobile"
                v-model="user.contact"
                v-bind:class="{error: $v.user.contact.$error, valid: $v.user.contact.$dirty && !$v.user.contact.$invalid}">
            <div v-if="$v.user.contact.$dirty">
                  <p class="error-message" v-if="!$v.user.contact.required">Field is required</p>
                   <p class="error-message" v-if="$v.user.contact.required && !$v.user.contact.validateContact">Invalid</p>
           </div>
           <input  class="form-control input"
                type="password"
                placeholder="password"
                v-model="user.password"
                v-bind:class="{error: $v.user.password.$error, valid: $v.user.password.$dirty && !$v.user.password.$invalid}">
           <div v-if="$v.user.password.$dirty">
                  <p class="error-message" v-if="!$v.user.password.required">  Field is required</p>
                  <p class="error-message" v-if="!$v.user.password.minLength">Minimum 6 Characters</p>
           </div>
    <br/>
           <div class="row">
              <div class="col-md-6"> </div>
                <div class="col-md-6 float-right">
                  <a href="#" class="btn btn-3">forgot password?</a>
                </div>
          </div>
           <div class="row">
              <div class="col-md-6"> </div>
                <div class="col-md-6 float-right">
                  <b-link class="btn" v-b-modal.loginSignupModal>Signup</b-link>
                  <!-- <button  class="btn btn-1 btn-white" @click="login(user)">login</button> -->
                    <button autofocus class="btn btn-1 btn-white"  type="submit">login</button>
                     <br>
                 </div>
           </div>
              </form>
            </div>
          </div>
        </b-col>
      </b-row>
      <login-signup-modal></login-signup-modal>
    </b-container>

  </div>
</template>

<script>
import MainHeader from "@/components/comp/MainHeader.vue";
import CoverBanner from "@/components/comp/CoverBanner.vue";
import PageFooter from "@/components/comp/PageFooter.vue";
import LoginSignupModal from "@/components/comp/modals/LoginSignupModal.vue";
import AccountApi from "@/services/api/Account";
import swal from "sweetalert2";
import { required, minLength} from "vuelidate/lib/validators";
import validateContact from "@/validator/ValidateContact";
export default {
  name: "Index",
  components: {
    MainHeader,
    CoverBanner,
    PageFooter,
    LoginSignupModal
  },
   validations: {
     user:{
       contact:{
        validateContact,
         required,

       },
        password: {
                required,
               minLength: minLength(6)
      },
     }
   },
  updated() {
    // this.checkCurrentLogin();
  },
  created() {
    // this.checkCurrentLogin();
    // this.onPageRefresh();
  },
  methods: {
    checkCurrentLogin: function() {
      if (this.$session.exists("current_user")) {
        this.$router.replace(this.$route.query.redirect || "/teachers");
      }
      console.log("Check..");
    },
    check: function() {
      axios({
        method: "get",
        url: "user/"
      })
        .then(result => {
          console.log(result);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getUserInfo() {
      return new Promise((resolve, reject)=>{
      if (this.$session.exists("contact")) {
        AccountApi.getUserInfo(this.$session.get("contact"))
          .then(reponse => {
            this.$session.set("current_user", reponse.data);
            console.log("Current user in session",this.$session.get("current_user"));
            resolve(reponse);
          })
          .catch(err => {
            console.log(err);
            reject(err);
          });
      }
      });
    },
    login(user) {
        this.$v.$touch();
       if (this.$v.$invalid){
       console.log("error");
       }
      else {
        AccountApi.login(user)
          .then(response => {
            console.log(response);
            this.$session.start();
            this.$session.set("access_token", response.data.access_token);
            this.$session.set("refresh_token", response.data.refresh_token);
            this.$session.set("contact", user.contact);
            const toast = swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 8000
            });
            toast({
              type: "success",
              title: "Signed in successfully"
            });
             this.$router.replace(this.$route.query.redirect || "/institute");
          })
          .catch(err => {
            console.log(err);
            swal({
              type: "error",
              title: "Bad credentials"
            });
            return false;
          });
      }
    },
    // onPageRefresh: function() {
    //   console.log("Page Refreshing", this.$session.exists("refresh_token"));
    //   if (this.$session.exists("refresh_token")) {
    //     console.log(
    //       "Refresh token available",
    //       this.$session.get("refresh_token")
    //     );
    //     AccountApi.getAccessToken(this.$session.get("refresh_token"))
    //       .then(response => {
    //         console.log(response);
    //         this.$session.set("access_token", response.data.access_token);
    //         this.$session.set("refresh_token", response.data.refresh_token);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    //   }
    // }
  },
  data() {
    return {
      info: null,
      phone: "",
      user: {
        contact: "",
        password: ""
      }
    };
  }
};
</script>
<style scoped>
.card-style {
  box-shadow: 1px 1px #888888;
  border-radius: 25px;
}

/*.nav {
    height: 70px;
    width: 100%;
    background-color: #ffffff;
    position: relative;
  }
  .button {
    fill: #fff;
    background: #fff;
  }*/
.input {
  font-size: 15px;
  margin: 15px 0;
  padding: 10px 20px;
  border-color: none;
  border-radius: 25px;
  background-color: #eee;
}
.btn-1 {
  color: #000;
  border-radius: 20px;
  /* box-shadow: 2px 2px #000; */
  box-shadow: 2px 2px 3px 1px #000;
  font-size: 18px;
  margin: auto;
}

.btn-1:hover {
  background: #68b8b6;
  color: #fff;
  box-shadow: 1px 1px 1px 1px #000;
}

a {
  color: #68b8b6;
}

a:hover {
  color: #b8bbbb;
}

.btn-3 {
  color: #b8bbbb;
}
.error-message {
  color: red;
  font-size: 13px;
  margin: 5px 0 0 5px;
}
.form-wrap {
  padding-top: 35px;
}
.alert {
  padding-top: 1.5rem;
}
.alert h5 {
  margin-bottom: 0rem;
}
.error {
  border-color: red;
}
.error-focus {
  border-color: red;
}
/* .valid{
  border-color:lawngreen;
} */
</style>

