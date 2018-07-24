<template>
<div>
    <b-modal id="instituteModal"
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    centered
    v-model="showInstituteModal">
        <b-container fluid>
            <b-row>
                <b-col>
                <button type="button" class="close" @click="showInstituteModal=false" aria-label="Close" style="margin-left:25px;margin-top:0px;" float-right>
                    <span aria-hidden="true">&times;</span>
                </button>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
<b-tabs>
  <b-tab title="ADD INSTITUTE">
      <b-container fluid style="margin-top: 50px;">
          <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-graduation-cap" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text"
                         class="form-control"
                         placeholder="Institute Name"
                         v-model="instituteData.name"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-bind:class="{error: $v.instituteData.name.$error, valid: $v.instituteData.name.$dirty && !$v.instituteData.name.$invalid}">
                </div>
                <div class="mb-3" v-if="$v.instituteData.name.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.name.required">Field is required</p>
           </div>
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-street-view" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text"
                         class="form-control"
                         placeholder="Street"
                         v-model="instituteData.address.street"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-bind:class="{error: $v.instituteData.address.street.$error, valid: $v.instituteData.address.street.$dirty && !$v.instituteData.address.street.$invalid}">
                </div>
                 <div class="mb-3" v-if="$v.instituteData.address.street.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.address.street.required">Field is required</p>
                </div>
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-globe" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text"
                         class="form-control"
                         placeholder="City"
                         v-model="instituteData.address.city"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-bind:class="{error: $v.instituteData.address.city.$error, valid: $v.instituteData.address.city.$dirty && !$v.instituteData.address.city.$invalid}">
                </div>
                <div class="mb-3" v-if="$v.instituteData.address.city.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.address.city.required">Field is required</p>
                </div>
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                   <i class="fa fa-globe" aria-hidden="true"></i>
                    </span>
                </div>
                  <input  type="text"
                          class="form-control"
                          placeholder="State"
                          v-model="instituteData.address.state"
                          style="border-radius:  0px 50px 50px 0px;"
                          v-bind:class="{error: $v.instituteData.address.state.$error, valid: $v.instituteData.address.state.$dirty && !$v.instituteData.address.state.$invalid}">
                </div>
                 <div class="mb-3" v-if="$v.instituteData.address.state.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.address.state.required">Field is required</p>
                </div>
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                  <i class="fa fa-globe" aria-hidden="true"></i>
                    </span>
                </div>
                  <input  type="text"
                          class="form-control"
                          placeholder="Country"
                          v-model="instituteData.address.country"
                          style="border-radius:  0px 50px 50px 0px;"
                          v-bind:class="{error: $v.instituteData.address.country.$error, valid: $v.instituteData.address.country.$dirty && !$v.instituteData.address.country.$invalid}">
                </div>
                 <div class="mb-3" v-if="$v.instituteData.address.country.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.address.country.required">Field is required</p>
                </div>
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                    <i class="fa fa-tty" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text"
                         class="form-control"
                         placeholder="Zipcode"
                         v-model="instituteData.address.zipcode"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-bind:class="{error: $v.instituteData.address.zipcode.$error, valid: $v.instituteData.address.zipcode.$dirty && !$v.instituteData.address.zipcode.$invalid}">
                </div>
                 <div class="mb-3" v-if="$v.instituteData.address.zipcode.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.address.zipcode.required">Field is required</p>
                </div>
              </b-col>
          </b-row>
                    <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                     <i class="fa fa-university" aria-hidden="true"></i></span>
                </div>
                  <input type="text"
                         class="form-control"
                         placeholder="Type"
                         v-model="instituteData.type"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-bind:class="{error: $v.instituteData.type.$error, valid: $v.instituteData.type.$dirty && !$v.instituteData.type.$invalid}">
                </div>
                 <div class="mb-3" v-if="$v.instituteData.type.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.type.required">Field is required</p>
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
                    <button class="btn btn-1 border" @click="cancel" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Cancel</button>
                    <a class="btn btn-1 btn-2 px-2" disabled="$v.instituteData.$error"  @click="createInstitute">Add</a>
                  </div>
            </b-col>
          </b-row>
      </b-container>
  </b-tab>
  </b-tabs>
  </b-col>
  </b-row>
  </b-container>
  </b-modal>
  <b-col>
  <b-row>
    </b-row>
    </b-col>

</div>
</template>

<script>
import {addInstitute} from "@/store/index";
import AccountApi from "@/services/api/Account";
import InstituteCard from '@/components/comp/cards/InstituteCard.vue';
import { required} from "vuelidate/lib/validators";
export default {
  name: "InstituteModal",
  components:{
        InstituteCard
  },
   validations: {
    instituteData: {
      name: {
        required,
      },
      address:{
      street:{
        required
      },
      city:{
        required
      },
      state:{
        required
      },
      country:{
        required
      },
      zipcode:{
        required
      }
    },
    type: {
        required,
      },
    }
   },
  methods: {
       clearInstituteData () {
      this.instituteData.name = '';
      this.instituteData.type='';
      this.instituteData.address.street = '';
      this.instituteData.address.city = '';
      this.instituteData.address.contact = '';
      this.instituteData.address.zipcode = '';
      this.$v.$reset();
    },
    createInstitute:function (instituteData) {
       this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      }else{
      console.log('one time..');
      let uuid =  this.$session.get("current_user").id;
        AccountApi.createInstitute(uuid,instituteData)
          .then(response => {
            console.log(response);
            //  this.getInstituteInfo();
          })
          .catch(err => {
            console.log(err);
            return false;
          });
      this.instituteData.noparent='0';
      this.instituteData.nostudent='0';
      this.instituteData.nostaff='0';
      this.instituteData.feedscount='0';
      this.instituteData.chatscount='0';
      this.instituteData.likescount='0';
      this.$store.dispatch('addInstituteDetail',this.instituteData);
      console.log(this.instituteData.institutename);
      this.clearInstituteData();
      this.showInstituteModal=false;
    }
    },
    cancel(){
      this.showInstituteModal=false;
      this.clearInstituteData();
    }
  },
  data: function() {
    return {
       details:[],
       instituteData:{
        name:'',
        address:{
            street:'',
            city:'',
            state:'',
            country:'',
            zipcode:''
        },
        type:'',
      },
      showInstituteModal: false
    };
  }
   }
// };
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
.error-message {
  color: red;
  font-size: 13px;
  margin: 5px 0 0 5px;
}
.error {
  border-color: red;
}
</style>
