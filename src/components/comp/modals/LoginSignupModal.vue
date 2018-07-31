<template>
<b-container>
    <b-modal id="loginSignupModal"
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    centered
    v-model="showLoginSignupModal">
        <b-container fluid>
            <b-row>
                <b-col>
                <img src="/static/images/logo.png" float-center>
                <button type="button" class="close" @click="cancel" aria-label="Close" style="margin-left:25px;margin-top:0px;" float-right>
                    <span aria-hidden="true">&times;</span>
                </button>
                </b-col>

            </b-row>
            <b-row>
                <b-col>
<b-tabs>
  <b-tab @click="clearUserData" title="Login">
     <form @submit.prevent="login(user)">
      <b-container fluid style="margin-top: 50px;">
          <b-row>
              <b-col>
                <div>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-user" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text"
                         class="form-control"
                         placeholder="Email/Mobile"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-model="user.contact"
                         v-bind:class="{error: $v.user.contact.$error, valid: $v.user.contact.$dirty && !$v.user.contact.$invalid}">
                </div>
                <div class="mb-3" v-if="$v.user.contact.$dirty">
                  <p class="error-message" v-if="!$v.user.contact.required">Field is required</p>
                   <p class="error-message" v-if="$v.user.contact.required && !$v.user.contact.validateContact">Invalid</p>
               </div>
                </div>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                </div>
                  <input type="password"
                         class="form-control"
                         placeholder="password"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-model="user.password"
                         v-bind:class="{error: $v.user.password.$error, valid: $v.user.password.$dirty && !$v.user.password.$invalid}">
                </div>
                <div class="mb-3" v-if="$v.user.password.$dirty">
                  <p class="error-message" v-if="!$v.user.password.required">  Field is required</p>
                  <p class="error-message" v-if="!$v.user.password.minLength">Minimum 6 Characters</p>
               </div>
                <a class="mainfont a3" href="#"  style="float:right;font-size:12px;">
                    forgot password?
                </a>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
              </b-col>
          </b-row>
          <b-row>
            <b-col>
                <hr>
                  <div class="float-right">
                    <a class="btn btn-1 border" @click="cancel" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Cancel</a>
                    <button class="btn btn-1 btn-2 px-2" type="submit">Login</button>
                  </div>
            </b-col>
          </b-row>
      </b-container>
     </form>
  </b-tab>
  <b-tab @click="clearUserData" title="Signup" active>
    <form @submit.prevent="signup(user)">
      <b-container fluid style="margin-top: 50px;">
          <b-row>
              <b-col>
                <div>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-user" aria-hidden="true"></i>
                    </span>
                </div>
                  <!-- <input type="text" v-model="user.contact" class="form-control" placeholder="email/mobile number" style="border-radius:  0px 50px 50px 0px;"> -->
                  <input  class="form-control input"
                          type="text"
                           placeholder="Email/Mobile"
                            style="border-radius:  0px 50px 50px 0px;"
                            v-model="user.contact"
                            v-bind:class="{error: $v.user.contact.$error, valid: $v.user.contact.$dirty && !$v.user.contact.$invalid}">
                </div>
                  <div class="mb-3" v-if="$v.user.contact.$dirty">
                        <p class="error-message" v-if="!$v.user.contact.required">Field is required</p>
                        <p class="error-message" v-if="$v.user.contact.required && !$v.user.contact.validateContact">invalid</p>
                </div>
                </div>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                <div>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                </div>
                 <input  class="form-control input"
                type="password"
                placeholder="password"
                style="border-radius:  0px 50px 50px 0px;"
                v-model="user.password"
                v-bind:class="{error: $v.user.password.$error, valid: $v.user.password.$dirty && !$v.user.password.$invalid}">
          </div>
           <div class="mb-3" v-if="$v.user.password.$dirty">
                  <p class="error-message" v-if="!$v.user.password.required">  Field is required</p>
                  <p class="error-message" v-if="!$v.user.password.minLength">Minimum 6 Characters</p>
           </div>
                </div>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
              </b-col>
          </b-row>
          <b-row>
            <b-col>
                <hr>
                  <div class="float-right">
                    <a class="btn btn-1 border" @click="cancel" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Cancel</a>
                    <button class="btn btn-1 btn-2 px-2"  type="submit">Signup</button>
                  </div>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <br>
              <p class="mainfont text-center" style="font-size:12px;">By signing up you agree to our
              <a href="#">"Terms of Policy</a>, <a href="">Privacy agreement"</a></p>
            </b-col>
          </b-row>
      </b-container>
    </form>
  </b-tab>
</b-tabs>
                </b-col>
            </b-row>
        </b-container>
    </b-modal>
</b-container>
</template>

<script>
import swal from "sweetalert2";
import { required, minLength } from "vuelidate/lib/validators";
import AccountApi from "@/services/api/Account";
import validateContact from "@/validator/ValidateContact";
export default {
  name: "LoginSignupModal",
  validations: {
    user: {
      contact: {
        required,
        validateContact
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    clearUserData() {
      this.user.contact = "";
      this.user.password = "";
      this.$v.$reset();
    },
    getUserInfo: function() {
      if (this.$session.exists("contact")) {
        AccountApi.getUserInfo(this.$session.get("contact"))
          .then(result => {
            this.$session.set("current_user", result.data);
            console.log(
              "Current user in session",
              this.$session.get("current_user")
            );
            window.location.reload();
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    login: function(user) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      } else {
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
            // this.getUserInfo();
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
    signup: function(user) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      } else {
        axios({
          method: "post",
          url: "account/register",
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            contact: user.contact,
            password: user.password
          }
        })
          .then(result => {
            const toast = swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 5000
            });
            toast({
              type: "success",
              title: "Register successfully"
            });
            this.showLoginSignupModal = false;
            this.clearUserData();
            console.log(result);
          })
          .catch(err => {
            const toast = swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 5000
            });
            toast({
              type: "error",
              title: "Username/Mail-id/Mobile-no Already Exists"
            });
            console.log(err);
          });
      }
    },
    cancel() {
      this.showLoginSignupModal = false;
      this.clearUserData();
    }
  },
  data: function() {
    return {
      user: {
        contact: null,
        password: null
      },
      showLoginSignupModal: false
    };
  }
};
</script>
<style>
a {
  color: #68b8b6;
}

a:hover {
  color: #b8bbbb;
}

.input-box {
  border-radius: 20px;
}
input::placeholder {
  text-align: center;
}
input {
  text-align: center;
}
.btn-1 {
  border-radius: 20px;
  width: 95px;
  padding: 3px;
  margin: auto;
  background-color: #fff;
}
.btn-2 {
  background-color: var(--main-primary-color);
  color: #fff;
}
.modal-backdrop {
  background-color: var(--main-primary-color);
}
.error-message {
  color: red;
  font-size: 13px;
  margin: 5px 0 0 5px;
}
.error {
  border-color: red;
}
.modal-content {
  border-radius: 25px;
}
</style>
