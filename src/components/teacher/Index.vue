<template>
<div style="overflow: hidden">
    <main-header  :currentUser="currentUser"></main-header>
    <cover-banner></cover-banner>
    <sub-menu :menuItems="menuItems"></sub-menu>
    <page-footer></page-footer>
<b-container  >
  <b-row>
    <b-col id="right-pane" cols="3" order="12">
       <StoryCategories></StoryCategories>
    </b-col>
    <b-col  id="center-pane" cols="5" order="1">
      <Stories></Stories>
    </b-col>
    <b-col id="left-pane" cols="4">
        <InstituteDetails></InstituteDetails>
        <!-- <UpcomingEvents></UpcomingEvents>        -->
    </b-col>
  </b-row>
</b-container>
</div>
</template>
<script>
  import MainHeader from "@/components/comp/MainHeader.vue";
  import CoverBanner from "@/components/comp/CoverBanner.vue";
  import SubMenu from "@/components/comp/SubMenu.vue";
  import PageFooter from "@/components/comp/PageFooter.vue";
  import InstituteDetails from "@/components/comp/InstituteDetails.vue";
  import UpcomingEvents from "@/components/comp/UpcomingEvents.vue";
  import Stories from "@/components/comp/Stories.vue";
  import StoryCategories from "@/components/comp/StoryCategories.vue";
  import Global from "@/services/api/Global";
  import AccountApi from "@/services/api/Account";
  export default {    
    name: "Story",
    props:['instituteId'],
    components: {
      MainHeader,
      CoverBanner,
      SubMenu,
      PageFooter,
      InstituteDetails,
      UpcomingEvents,
      Stories,
      StoryCategories
    },
    data() {      
      return {
        menuItems:[
            {name: 'Stories', link:'#/teacher/'+this.instituteId, icon: 'fa fa-newspaper-o', active: 'active'},
            {name: 'Class', link:'#/teacher/'+this.instituteId+'/class', icon: 'fa fa-users', active: ''},
            {name: 'Staff', link:'#', icon: 'fa fa-user-o', active: ''},
            {name: 'Student', link:'#', icon: 'fa fa-graduation-cap', active: ''},
            {name: 'Event', link:'#', icon: 'fa fa-calendar-o', active: ''},
            {name: 'Message', link:'#', icon: 'fa fa-commenting-o', active: ''},
            // {name: 'Settings', link:'#', icon: 'fa fa-cog', active: ''},
          ],
        currentUser:null,
      };
    },
     async mounted(){
      console.log("Getting refresh token");
      await Global.onPageRefresh(this.$session);
      console.log("Getting User info");
      await this.getUserInfo();
  },
methods:{
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
}
    // computed:{
    // function(c){
    //   var a=["DOMMouseScroll","mousewheel"];
    //   c.event.special.mousewheel={
    //       setup:function(){
    //         if(this.addEventListener){
    //           for(var d=a.length;d;){
    //             this.addEventListener(a[--d],b,false)
    //           }
    //         }else{
    //           this.onmousewheel=b
    //         }},
    //         teardown:function(){
    //           if(this.removeEventListener){
    //             for(var d=a.length;d;){
    //               this.removeEventListener(a[--d],b,false)
    //             }
    //           }else{
    //             this.onmousewheel=null
    //           }
    //         }};
    //         c.fn.extend(
    //         {
    //           mousewheel:function(d){return d?this.bind("mousewheel",d):this.trigger("mousewheel")
    //         },
    //         unmousewheel:function(d){return this.unbind("mousewheel",d)}});
    //         function b(f){
    //           var d=[].slice.call(arguments,1),g=0,e=true;f=c.event.fix(f||window.event);
    //           f.type="mousewheel";
    //           if(f.wheelDelta){
    //             g=f.wheelDelta/120
    //           }if(f.detail){
    //             g=-f.detail/3}d.unshift(f,g);
    //             return c.event.handle.apply(this,d)
    //           }
    //         }
    //         )(jQuery);
    // }

  };
</script>
<style scoped>
#center-pane{
  /*overflow: hidden;*/
  overflow-y: scroll;
  height:90vh;
}
#right-pane{
  /*overflow: hidden;  */
  overflow-y: scroll;
  height:92vh;
}
#left-pane{
  /*overflow: hidden;  */
  overflow-y: scroll;
  height:92vh;
}
    .feedPost {
    background: #fff;
    border: 5px solid #fff;
    /* height:220px;
    width:450px; */
    max-width: 100%;
    display: block;
  }
  ::-webkit-scrollbar {
    display: none;
  }
</style>


