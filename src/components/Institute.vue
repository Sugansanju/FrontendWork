
<template>
<div style="padding-bottom: 100px">
<main-header :currentUser="currentUser"></main-header>
    <page-footer></page-footer>
    <b-container >
      <!-- <b-row style="margin-top:30px;"> -->
        <institute-card v-for="detail in details" :details="detail" v-bind:key="detail.id"></institute-card>
       <!-- </b-row> -->
            <b-col cols="4">
             <div class="institute-card">
               <b-col align-self="center" >
                  <b-link class="btn" v-b-modal.instituteModal> <i class="fa fa-plus-circle fa-3x icon" aria-hidden="true" ></i></b-link>
               </b-col>
             </div>
            </b-col>
    </b-container>
  <institute-modal @submitted="createInstitute"></institute-modal>
</div>
</template>
<script>
import MainHeader from "@/components/comp/MainHeader.vue";
import PageFooter from "@/components/comp/PageFooter.vue";
import InstituteModal from "@/components/comp/modals/InstituteModal.vue";
import InstituteApi from "@/services/api/Institute";
import AccountApi from "@/services/api/Account";
import Global from "@/services/api/Global";
import swal from "sweetalert2";
import InstituteCard from "@/components/comp/cards/InstituteCard.vue";
const toast = swal.mixin({
              toast: true,
              position: "top",
              showConfirmButton: false,
              timer: 5000
   });
export default {
  name: "Institute",
  components: {
    MainHeader,
    InstituteModal,
    InstituteCard,
    PageFooter
  },
  data() {
    return {
      details:this.$store.state.instituteDetails,
      currentUser:null,
    };
  },
  mounted(){

    //  location.reload=this.onPageRefresh;
  },
  async mounted(){
      console.log("Getting refresh token");
      await Global.onPageRefresh(this.$session);
      console.log("Getting User info");
      await this.getUserInfo();
      console.log("Getting Institutes");
      await this.getInstitutes();
  },
  methods: {

   // async createInstitute() {
    //   this.$v.$touch();
    //   if (this.$v.$invalid) {
    //     console.log("error");
    //   } else {
    //     console.log("one time..");
    //     let uuid = this.$session.get("current_user").id;
    //     await InstituteApi.createInstitute(uuid, this.instituteData)
    //       .then(response => {
    //         console.log(response);
    //         this.clearInstituteData();
    //         this.showInstituteModal = false;
    //         this.$emit("clicked",response.data);
    //       })
    //       .catch(err => {
    //         console.log(err);
    //         createInstitute(instituteData);
    //         const toast = swal.mixin({
    //           toast: true,
    //           position: "top",
    //           showConfirmButton: false,
    //           timer: 8000
    //         });
    //         toast({
    //           type: "error",
    //           title: "Error"
    //         });
    //         // return false;
    //       });
    //   }
    // }
    createInstitute(data){
      console.log("modal created",data);
        let uuid = this.$session.get("current_user").id;
        InstituteApi.createInstitute(uuid, data)
          .then(response => {
            console.log(response);
            toast({
              type: "success",
              title: "Institute Creation Successfully"
            });
            this.getInstitutes();
          })
          .catch(err => {
            console.log(err);
            toast({
              type: "success",
              title: "Institute Creation Failed"
            });
          });
    },
    getInstitutes() {
      return new Promise((resolve, reject)=>{
        var uuid=null;
        if(this.$session.exists("current_user")){
          let user=this.$session.get("current_user");
          console.log('The User is ', user);
          uuid = user.id;
        }
        InstituteApi.getInstituteDetails(uuid)
        .then(response => {
          console.log("response", response);
          // this.$store.dispatch("addInstituteDetail",null);
          this.$store.dispatch("addInstituteDetail", response.data);
          resolve(response);
        })
        .catch(err=>{
          console.log(err);
          reject(err)
        });
      });
    },
    getUserInfo() {
      return new Promise((resolve, reject)=>{
      if (this.$session.exists("contact")) {
        AccountApi.getUserInfo(this.$session.get("contact"))
          .then(reponse => {
            this.$session.set("current_user", reponse.data);
            this.currentUser=reponse.data;
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
  },
};
</script>
<style scoped>
.primary {
  color: var(--main-primary-color);
}
.icon {
  color: var(--main-primary-color);
  margin-top: 40px;
}
.institute-card {
  background: #fff;
  /* width:350px; */
  /* width:34%; */
  margin-top:45px;
  height: 150px;
  border-radius:9px;
  box-shadow: 5px 8px 25px 5px #888888;
  padding: 10px 10px 10px 10px;
}
.institute-img {
  margin-left: 10px;
  /* margin-top: 25%; */
}
.institute-card h1 {
  font-family: "Cabin", sans-serif;
  font-size: 1.5em;
  margin-top: 10px;
  margin-left: 5px;
  /* width: 100%; */
  /* overflow: hidden; */
}
.feeds-badge {
  height: 60px;
  width: 60px;
  display: inline-block;
  background-image: url("/static/images/feeds-badge.png");
  background-repeat: no-repeat;
}
.likes-badge {
  height: 60px;
  width: 60px;
  display: inline-block;
  background-image: url("/static/images/likes-badge.png");
  background-repeat: no-repeat;
}
.chats-badge {
  height: 60px;
  width: 60px;
  display: inline-block;
  background-image: url("/static/images/chats-badge.png");
  background-repeat: no-repeat;
}
.feeds-bubble {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  background: #f7b90b;
  margin-left: 50%;
  text-align: center;
}
.likes-bubble {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  background: #3279a7ff;
  margin-left: 50%;
  text-align: center;
}
.chats-bubble {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  display: inline-block;
  background: #3baf9dff;
  margin-left: 50%;
  text-align: center;
}
.bubble-field {
  color: white;
  margin: auto;
}
.staff-stats {
  color: #f46c5dff;
  font-family: "Cabin", sans-serif;
  font-size: 1.2em;
  text-align: center;
  display: inline-block;
  padding: 10px 10px 10px 10px;
  margin-left: 100px;
  margin-top: -60px;
}
.parent-stats {
  color: #30445bff;
  font-family: "Cabin", sans-serif;
  font-size: 1.2em;
  text-align: center;
  padding: 10px 10px 10px 10px;
  margin-top: -60px;
}
.student-stats {
  color: #ace1b0ff;
  font-family: "Cabin", sans-serif;
  font-size: 1.2em;
  text-align: center;
  padding: 10px 10px 10px 10px;
  margin-top: -60px;
}
</style>

