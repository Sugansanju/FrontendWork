<template>
<div style="padding-bottom: 100px">
 <main-header  :currentUser="currentUser"></main-header>
    <cover-banner></cover-banner>
    <sub-menu :menuItems="menuItems"></sub-menu>
    <page-footer></page-footer>
    <b-container >
      <b-col cols="3">

      <b-row style="margin-top:30px;">
        <class-card v-for="detail in details" :details="detail" v-bind:key="detail.id" ></class-card>
      </b-row>
      </b-col>
<b-col sm="3">
           <div class="class-card">
              <b-row>
               <b-col align-self="center" >
                  <b-link class="btn" v-b-modal.classModal> <i class="fa fa-plus-circle fa-3x icon" aria-hidden="true" ></i></b-link>
               </b-col>
            </b-row>
             </div>
          </b-col>
            <!-- <button @click="getInstitutes">API</button> -->
    </b-container>
  <class-modal></class-modal>
</div>
</template>
<script>
  import MainHeader from "@/components/comp/MainHeader.vue";
  import CoverBanner from "@/components/comp/CoverBanner.vue";
  import SubMenu from "@/components/comp/SubMenu.vue";
  import PageFooter from "@/components/comp/PageFooter.vue";
  import classModal from "@/components/comp/modals/ClassModal.vue";
  import Global from "@/services/api/Global";
  import AccountApi from "@/services/api/Account";
  export default {
    name: "Institute",
    components: {
         MainHeader,
         CoverBanner,
         SubMenu,
         classModal,
         PageFooter
        },
  data() {
    return {
      menuItems:[
            {name: 'Stories', link:'#/teacher', icon: 'fa fa-newspaper-o', active: ''},
            {name: 'Class', link:'#/class', icon: 'fa fa-users', active: 'active'},
            {name: 'Staff', link:'#', icon: 'fa fa-user-o', active: ''},
            {name: 'Student', link:'#', icon: 'fa fa-graduation-cap', active: ''},
            {name: 'Event', link:'#', icon: 'fa fa-calendar-o', active: ''},
            {name: 'Message', link:'#', icon: 'fa fa-commenting-o', active: ''}
          ],
        currentUser:null,
        details:[],
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
  },
  methods: {
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
  margin-top: 65px;
}
.class-card {
  background: #fff;
  height: 230px;
  border-radius: 5px;
  box-shadow: 5px 8px 25px 5px #888888;
  padding: 10px 10px 10px 10px;
}

</style>

