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
                      <i class="fa fa-university" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text"
                         class="form-control"
                         placeholder="Institute Name"
                         v-model="instituteData.institutename"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-bind:class="{error: $v.instituteData.institutename.$error, valid: $v.instituteData.institutename.$dirty && !$v.instituteData.institutename.$invalid}">
                </div>
                <div class="mb-3" v-if="$v.instituteData.institutename.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.institutename.required">Field is required</p>
           </div>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-address-card" aria-hidden="true"></i></span>
                </div>
                  <input type="text"
                         class="form-control"
                         placeholder="Address"
                         v-model="instituteData.address"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-bind:class="{error: $v.instituteData.address.$error, valid: $v.instituteData.address.$dirty && !$v.instituteData.address.$invalid}">
                </div>
                 <div class="mb-3" v-if="$v.instituteData.address.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.address.required">Field is required</p>
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
                         v-model="instituteData.street"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-bind:class="{error: $v.instituteData.street.$error, valid: $v.instituteData.street.$dirty && !$v.instituteData.street.$invalid}">
                </div>
                 <div class="mb-3" v-if="$v.instituteData.street.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.street.required">Field is required</p>
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
                         v-model="instituteData.city"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-bind:class="{error: $v.instituteData.city.$error, valid: $v.instituteData.city.$dirty && !$v.instituteData.city.$invalid}">
                </div>
                <div class="mb-3" v-if="$v.instituteData.city.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.city.required">Field is required</p>
                </div>
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                   <i class="fa fa-phone" aria-hidden="true"></i>
                    </span>
                </div>
                  <input  type="text"
                          class="form-control"
                          placeholder="Contact"
                          v-model="instituteData.contact"
                          style="border-radius:  0px 50px 50px 0px;"
                          v-bind:class="{error: $v.instituteData.contact.$error, valid: $v.instituteData.contact.$dirty && !$v.instituteData.contact.$invalid}">
                </div>
                 <div class="mb-3" v-if="$v.instituteData.contact.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.contact.required">Field is required</p>
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
                         v-model="instituteData.zipcode"
                         style="border-radius:  0px 50px 50px 0px;"
                         v-bind:class="{error: $v.instituteData.zipcode.$error, valid: $v.instituteData.zipcode.$dirty && !$v.instituteData.zipcode.$invalid}">
                </div>
                 <div class="mb-3" v-if="$v.instituteData.zipcode.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.zipcode.required">Field is required</p>
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
                    <a class="btn btn-1 btn-2 px-2" disabled="$v.instituteData.$error"  @click="addInstituteDetail">Add</a>
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
<!-- <institute-card v-for="list in details" :details="list" v-bind:key="list"></institute-card> -->
    </b-row>
    </b-col>

</div>
</template>

<script>
import {addInstitute} from "@/store/index";
import InstituteCard from '@/components/comp/cards/InstituteCard.vue';
import Validate from "@/validator/ContactValidator";
  import { required} from "vuelidate/lib/validators";
export default {
  name: "InstituteModal",
  components:{
        InstituteCard
  },
   validations: {
    instituteData: {
      institutename: {
        required,
      },
      address: {
        required,
      },
      street:{
        required
      },
      city:{
        required
      },
      contact:{
        required
      },
      zipcode:{
        required
      }
    }
   },
  methods: {
       clearInstituteData () {
      this.instituteData.institutename = '';
      this.instituteData.address = '';
      this.instituteData.street = '';
      this.instituteData.city = '';
      this.instituteData.contact = '';
      this.instituteData.zipcode = '';
      this.$v.$reset();
    },
    addInstituteDetail () {
       this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error");
      }else{
      console.log('one time..');
      // this.instituteData.image='/static/images/institute-building.png';
      this.instituteData.noparent='0';
      this.instituteData.nostudent='0';
      this.instituteData.nostaff='0';
      this.instituteData.feedscount='0';
      this.instituteData.chatscount='0';
      this.instituteData.likescount='0';
      this.$store.dispatch('addInstituteDetail',this.instituteData);
      // this.details.push(this.defaultInstitute);
      // this.clearInstituteData();
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
        address:'',
        street:'',
        city:'',
        contact:'',
        zipcode:''
      },
      // defaultInstitute:[
      //     {
      //       image:'institute-building.png',
      //       institutename:'Anna University',
      //       nostaff:'20',
      //       nostudent:'35',
      //       noparent:'10',
      //       feedscount:'8',
      //       chatscount:'6',
      //       likescount:'5'
      //       },
      //       ],
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
