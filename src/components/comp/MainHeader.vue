<template>
  <div>
    <b-navbar toggleable="md" variant="info" class="bg-light">
      <b-navbar-brand href="#/">
        <b-img src="/static/images/dexter.png" width="45" height="45" alt="Dexter" /> Dexter Dojo
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse" v-if="$session.exists('current_user')">
        <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <a href="#" class="notification-counter" data-counter="0" >
            <span class="fa fa-bell-o" color="red"></span>
          </a>
        </b-nav-item>
          <b-nav-item-dropdown right>
            <template slot="button-content" v-if="currentUser!=null">
              <b-img src="/static/images/userimg3.png" width="35px" height="35px" />
               {{currentUser.username!=null?currentUser.username:(currentUser.email!=null?currentUser.email:User)}}
            </template>
            <b-dropdown-item v-b-modal.profileSettingsModal>
                <i class="fa fa-user" aria-hidden="true"></i> Profile
            </b-dropdown-item>
            <b-dropdown-item @click="logout">
              <i class="fa fa-sign-out" aria-hidden="true"></i> Signout
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <profile-settings-modal></profile-settings-modal>
    <otp-modal></otp-modal>
  </div>
</template>
<script>
import ProfileSettingsModal from "@/components/comp/modals/ProfileSettingsModal.vue"
import OtpModal from "@/components/comp/modals/OtpModal.vue"
import swal from "sweetalert2";
import AccountApi from "@/services/api/Account"
  export default{
    name: 'MainHeader',
    props:['currentUser'],
    components:{
        ProfileSettingsModal,
        OtpModal,
    },
   data:function(){
      return{
        // currentUser:null,
      }
    },
    methods:{
      logout: function(){
        const toast = swal.mixin({
          toast: true,
          position: "top",
          showConfirmButton: false,
          timer:5000
        });
        toast({
          type: "success",
          title: "Signed Out successfully"
        });
        console.log(this.$session.id());
        AccountApi.logout(this.$session.get('access_token')).then((result) => {
          console.log(result);
        }).catch((err) => {
          console.log(err);
        });
        console.log('Session Destroyed');
        this.$session.clear();
        this.$session.destroy();
        this.$router.replace(this.$route.query.redirect || '/')
        window.location.reload();
      },

    }

  };
</script>
<style scoped>
.notification-counter {
  position: relative;
  font-size:2em;
  color: #333;
  transition: all .2s ease-in-out;
}
.notification-counter[data-counter]:after {
  content: attr(data-counter);
  position: absolute;
  top: -0px;
  left: 50%;
  font-size: .4em;
  font-weight: bold;
  background:var(--main-primary-color);
  color: #fff;
  text-align: center;
  border-radius:50%;
  padding: 3px 5px;
}
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover{
  color: var(--main-primary-color);
  cursor: pointer;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link{
  color: var(--main-primary-color);
}
::-webkit-scrollbar {
    display: none;
}
</style>
