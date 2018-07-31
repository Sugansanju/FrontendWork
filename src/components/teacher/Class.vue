<template>
<div style="padding-bottom: 100px">
 <main-header  :currentUser="currentUser"></main-header>
    <cover-banner></cover-banner>
    <sub-menu :menuItems="menuItems"></sub-menu>
    <page-footer></page-footer>
    <b-container >
      <b-row style="margin-top:30px;">
     <!--    <institute-card v-for="detail in details" :details="detail" v-bind:key="detail.id" ></institute-card> -->
      <!-- props: ['classImage', 'className', 'teacherImage', 'teacherName', 'parentsCount', 'studentsCount'], -->
        <class-card v-for="detail in details" :details="detail" v-bind:key="detail.id"
          classImage="/static/images/chemistry.png"
          :className="detail.name"
          teacherImage="/static/images/img1.png"
          teacherName="Roselyn"
          parentsCount="0"
          studentsCount="0"
        >
        {{detail}}
        </class-card>
      </b-row>
       <div class="card">
          <b-link class="btn" v-b-modal.classModal> <i class="fa fa-plus-circle fa-3x icon" aria-hidden="true" ></i></b-link>
       </div>
<!-- <b-col cols="4">
           <div class="institute-card">
              <b-row>
               <b-col align-self="center" >
                  <b-link class="btn" v-b-modal.classModal> <i class="fa fa-plus-circle fa-3x icon" aria-hidden="true" ></i></b-link>
               </b-col>
            </b-row>
             </div>
          </b-col> -->
            <!-- <button @click="getInstitutes">API</button> -->
    </b-container>
  <class-modal :instituteId="instituteId"></class-modal>
</div>
</template>
<script>
import MainHeader from "@/components/comp/MainHeader.vue";
import CoverBanner from "@/components/comp/CoverBanner.vue";
import SubMenu from "@/components/comp/SubMenu.vue";
import PageFooter from "@/components/comp/PageFooter.vue";
import ClassModal from "@/components/comp/modals/ClassModal.vue";
import ClassCard from "@/components/comp/cards/ClassCard.vue";
import Global from "@/services/api/Global";
import AccountApi from "@/services/api/Account";
import ClazzApi from "@/services/api/Clazz";
export default {
  name: "Institute",
  props: ['instituteId'],
  components: {
    MainHeader,
    CoverBanner,
    SubMenu,
    ClassModal,
    PageFooter,
    ClassCard,
  },
  data() {
    return {
      menuItems: [
        {
          name: "Stories",
          link: "#/teacher/" + this.instituteId,
          icon: "fa fa-newspaper-o",
          active: ""
        },
        {
          name: "Class",
          link: "#/teacher/" + this.instituteId + "/class",
          icon: "fa fa-users",
          active: "active"
        },
        { name: "Staff", link: "#", icon: "fa fa-user-o", active: "" },
        {
          name: "Student",
          link: "#",
          icon: "fa fa-graduation-cap",
          active: ""
        },
        { name: "Event", link: "#", icon: "fa fa-calendar-o", active: "" },
        { name: "Message", link: "#", icon: "fa fa-commenting-o", active: "" }
      ],
      currentUser: null,
      details: this.$store.state.clazzDetails,
      instituteId:'',
    };
  },
  async mounted() {
    console.log(this.$route.path.split('/'));
    this.instituteId=this.$route.path.split('/')[2];
    console.log("Getting refresh token");
    await Global.onPageRefresh(this.$session);
    console.log("Getting User info");
    await this.getUserInfo();
    console.log("Getting Clazzes info");
    await this.getClazzes(this.instituteId);
  },
  methods: {
    getClazzes(instituteId) {
      return new Promise((resolve, reject)=>{
/*         var uuid=null;
        if(this.$session.exists("current_user")){
          let user=this.$session.get("current_user");
          console.log('The User is ', user);
          uuid = user.id;
        } */
        ClazzApi.getClazzDetails(instituteId)
        .then(response => {
          console.log("response", response);
          // this.$store.dispatch("addInstituteDetail",null);
          this.$store.dispatch("addClazzDetail", response.data);
          this.details=response.data;
          resolve(response);
        })
        .catch(err=>{
          console.log(err);
          reject(err)
        });
      });
    },
    getUserInfo() {
      return new Promise((resolve, reject) => {
        if (this.$session.exists("contact")) {
          AccountApi.getUserInfo(this.$session.get("contact"))
            .then(reponse => {
              this.$session.set("current_user", reponse.data);
              this.currentUser = reponse.data;
              console.log(
                "Current user in session",
                this.$session.get("current_user")
              );
              resolve(reponse);
            })
            .catch(err => {
              console.log(err);
              reject(err);
            });
        }
      });
    }
  }
};
</script>
<style scoped>
.primary {
  color: var(--main-primary-color);
}
.icon {
  color: var(--main-primary-color);
  margin-top:58px;
}
  .card {
    width: 13%;
    /* height:200px; */
    margin: 10px 10px 10px 10px;
    text-align: left;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
  }

  .card:hover {
    width: 13%;
    margin: 10px 10px 10px 10px;
    text-align: left;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease-in-out;
  }
</style>

