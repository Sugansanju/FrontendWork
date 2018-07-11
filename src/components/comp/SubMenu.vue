<template>
<b-container fluid>
    <!-- <b-navbar toggleable="md" variant="info" class="bg-light" sticky> -->
      <b-navbar toggleable="md" variant="info" class="bg-light" sticky>
      <div v-if="avatarContainerBig" class="pro-avatar-container"></div>
      <div v-if="avatarContainerSmall" class="pro-avatar-container-mini"></div>
      <div v-if="instituteNavTitle" class="institute-nav-title">
          <strong>Dexter Academy</strong>
          <img src="/static/images/ic.png" width="10" height="10">
       </div>      
      <b-collapse is-nav id="nav_collapse">           
        <b-navbar-nav class="mx-auto">
          <b-nav-item  
            v-for="item in menuItems" 
              :href="item.link"
              :key="item.name" 
              :class="item.active">
            <i :class="item.icon" aria-hidden="true"></i> {{item.name}}
          </b-nav-item>
          <b-nav-item v-b-modal.classSettingsModal><i class="fa fa-cog" aria-hidden="true"></i>Settings</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <class-settings-modal></class-settings-modal>
</b-container>
</template>
<script>
import ClassSettingsModal from "@/components/comp/modals/ClassSettingsModal.vue";

  export default {    
    name: 'SubMenu',
    props:['menuItems'],
    components:{
      ClassSettingsModal,
    },
    data: function () {
      return {
        // menuItems:null,
        avatarContainerBig:true,
        avatarContainerSmall:false,
        instituteNavTitle: false,
      }
    },
  methods: {
    handleScroll (event) { 
        // console.log(window.scrollY);                 
        if(window.scrollY > 400){
          this.avatarContainerBig=false;
          this.avatarContainerSmall=true;
          this.instituteNavTitle=true;
        }
        if(window.scrollY < 400){         
          this.avatarContainerBig=true;
          this.avatarContainerSmall=false;
          this.instituteNavTitle=false;
        }
      }
  },
  created () {
      document.addEventListener('scroll', this.handleScroll);   
  }, 
    
  };
</script>
<style>
.institute-nav-title{    
  position: absolute;
    left: 210px;
}
  .pro-avatar-container {
    background-image: url("/static/images/dp.jpg");
    background-repeat: no-repeat;    
    height: 100px;
    width: 100px;
    left: 150px;
    /* position: absolute; */
    border: 1px solid #fff;
    border-radius: 25%; 
    position: absolute;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: 998;
    margin-top: -25px;
    transition: all .3s ease;
  }
  .pro-avatar-container-mini {
    background-image: url("/static/images/dp.jpg");
    background-repeat: no-repeat;    
    height: 50px;
    width: 50px;
    left: 150px;
    /* position: absolute; */
    border: 1px solid #fff;
    border-radius: 25%; 
    position: absolute;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    z-index: 1000;  
    transition: all .6s ease;      
  }
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover{
  color: var(--main-primary-color);
  cursor: pointer;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link{
  color: var(--main-primary-color);
}
</style>