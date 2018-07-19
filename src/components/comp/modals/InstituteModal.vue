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
                  <input type="text" class="form-control" id="name" placeholder="Institute Name" v-model="instituteData.name" style="border-radius:  0px 50px 50px 0px;">
                  <!-- v-bind:class="{error: $v.instituteData.name.$error, valid: $v.instituteData.name.$dirty && !$v.instituteData.name.$invalid}">
            <div v-if="$v.instituteData.name.$dirty">
                  <p class="error-message" v-if="!$v.instituteData.name.required">Field is required</p>
           </div> -->
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
                  <input type="text" class="form-control" placeholder="Address" v-model="instituteData.address" style="border-radius:  0px 50px 50px 0px;">
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
                  <input type="text" class="form-control" placeholder="Street" v-model="instituteData.street" style="border-radius:  0px 50px 50px 0px;">
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
                  <input type="text" class="form-control" placeholder="City" v-model="instituteData.city" style="border-radius:  0px 50px 50px 0px;">
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
                  <input type="text" class="form-control" placeholder="Contact" v-model="instituteData.contact" style="border-radius:  0px 50px 50px 0px;">
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
                  <input type="text" class="form-control" placeholder="Zipcode" v-model="instituteData.zipcode" style="border-radius:  0px 50px 50px 0px;">
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
                    <button class="btn btn-1 border" @click="showInstituteModal=false" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Cancel</button>
                    <button class="btn btn-1 btn-2 px-2" @click="handleSubmit">Add</button>
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
import InstituteCard from '@/components/comp/cards/InstituteCard.vue';
import Validate from "@/validator/ContactValidator";
  import { required} from "vuelidate/lib/validators";
export default {
  name: "InstituteModal",
  components:{
        InstituteCard
  },
  //  validations: {
  //      instituteData:{
  //        name:{
  //          required,

  //        },
  //      },
  methods: {
       clearName () {
      this.instituteData.name = ''
    },
    handleSubmit () {
      console.log('one time..');
        // let data = {
        //         name: this.instituteData.name,
        // };
      this.details.push(this.defaultInstitute);
      this.clearName()
      this.showInstituteModal=false;
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
</style>
