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
                <button type="button" class="close" @click="showLoginSignupModal=false" aria-label="Close" style="margin-left:25px;margin-top:0px;" float-right>
                    <span aria-hidden="true">&times;</span>
                </button>
                </b-col>

            </b-row>
            <b-row>
                <b-col>
<b-tabs>
  <b-tab title="Login">
      <b-container fluid style="margin-top: 50px;">
          <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-user" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text" class="form-control" placeholder="email/mobile number" style="border-radius:  0px 50px 50px 0px;">
                </div>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                </div>
                  <input type="text" class="form-control" placeholder="password"  style="border-radius:  0px 50px 50px 0px;">
                </div>
                <a  class="mainfont a3" href="#"  style="float:right;font-size:12px;">
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
                    <button class="btn btn-1 border" @click="showLoginSignupModal=false" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Cancel</button>
                    <button class="btn btn-1 btn-2 px-2">Login</button>
                  </div>
            </b-col>
          </b-row>
      </b-container>
  </b-tab>
  <b-tab title="Signup" active>
      <b-container fluid style="margin-top: 50px;">
          <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-user" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text" v-model="user.contact" class="form-control" placeholder="email/mobile number" style="border-radius:  0px 50px 50px 0px;">
                </div>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                </div>
                  <input type="password" v-model="user.password" class="form-control" placeholder="password"  style="border-radius:  0px 50px 50px 0px;">
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
                    <button class="btn btn-1 border" @click="showLoginSignupModal=false" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Cancel</button>
                    <button class="btn btn-1 btn-2 px-2" @click="signup(user)">Signup</button>
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
  </b-tab>
</b-tabs>
                </b-col>
            </b-row>
        </b-container>
    </b-modal>
</b-container>
</template>

<script>
import Validator from "@/validator/ContactValidator";
import swal from "sweetalert2";
export default {
  name: "LoginSignupModal",
  methods: {
    signup: function(user) {
        if ( !Validator.isValidEmail(this.user.contact) && !Validator.isValidPhone(this.user.contact)){

              if (this.user.contact == "" || this.user.contact == null) {
                  swal({
                    type: "error",
                    title: "Field required..."
                  });
                } else{
                  swal({
                      type: "error",
                      title: "Invalid...",
                      text: "Please enter valid email/phone"
                    });
                    return false;
                }
      }else {
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
            console.log(result);
          })
          .catch(err => {
            console.log(err);
          });
        this.showLoginSignupModal = false;
      }
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

.modal-content {
  border-radius: 25px;
}
</style>
