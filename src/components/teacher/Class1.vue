<template>
  <div style="overflow: hidden">
    <main-header></main-header>
    <cover-banner></cover-banner>
    <sub-menu :menuItems="menuItems"></sub-menu>
    <!-- <page-footer></page-footer> -->
    <b-container fluid>
      <b-row class="float-right">
        <b-nav>
          <b-nav-item @click="menuClicked('small')"><i class="fa fa-th text-secondary" aria-hidden="true"></i></b-nav-item>
          <b-nav-item @click="menuClicked('large')"><i class="fa fa-th-large text-secondary" aria-hidden="true"></i></b-nav-item>
          <b-nav-item @click="menuClicked('list')"><i class="fa fa-list text-secondary" aria-hidden="true"></i></b-nav-item>
        </b-nav>
      </b-row>
   </b-container>
        <b-container>
      <!-- <i class="icon-mu-parents"></i>
      <i class="icon-mu-classroom"></i>
      <i class="icon-mu-student"></i>   -->
      <!-- <b-row>
        <class-card
          classImage="/static/images/physics.png"
          className="Physics paper I"
          teacherImage="/static/images/cardpro.png"
          teacherName="Roselyn"
          parentsCount="100"
          studentsCount="107"></class-card>
          <student-card
           studentRoll="101"
           studentImage="/static/images/pro1.png"
           studentName="Dharshini S"
           teacherImage="/static/images/cardpro.png"
           teacherName="Roselyn"
           parentsCount="03"
           classroomsCount="06"></student-card>
           <staff-card
            staffImage="/static/images/img1111.png"
            staffName="Roselyn"
            classroomsCount="05"
            parentsCount="17"
            studentsCount="107"></staff-card>
      </b-row>
      <b-row>
          <student-mini-card
           studentRoll="101"
           studentImage="/static/images/pro1.png"
           studentName="Dharshini S"
           teacherImage="/static/images/cardpro.png"
           teacherName="Roselyn"
           parentsCount="03"
           classroomsCount="06"></student-mini-card>
           <staff-mini-card
            staffImage="/static/images/img1111.png"
            staffName="Roselyn"
            classroomsCount="05"
            parentsCount="17"
            studentsCount="107"></staff-mini-card>
      </b-row> -->

      <b-row style="margin-top: 50px;" v-if="viewMode=='list'">
        <student-table :items="studentsList"></student-table>
      </b-row>
      <b-row style="margin-top: 50px;" v-if="viewMode=='large'">
          <student-card v-for="item in studentsList"  v-bind:key="item.roll"
           :studentRoll="item.roll"
           :studentImage="item.student.image"
           :studentName="item.student.name"
           :teacherImage="item.teacher.image"
           :teacherName="item.teacher.name"
           :parentsCount="item.parents"
           :classroomsCount="item.classes"></student-card>
      </b-row>
      <b-row style="margin-top: 50px;" v-if="viewMode=='small'">
          <student-mini-card v-for="item in studentsList" v-bind:key="item.roll"
           :studentRoll="item.roll"
           :studentImage="item.student.image"
           :studentName="item.student.name"
           :teacherImage="item.teacher.image"
           :teacherName="item.teacher.name"
           :parentsCount="item.parents"
           :classroomsCount="item.classes"></student-mini-card>

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
  import ClassCard from "@/components/comp/cards/ClassCard.vue";
  import StudentCard from "@/components/comp/cards/StudentCard.vue";
  import StudentMiniCard from "@/components/comp/cards/StudentMiniCard.vue";
  import StaffMiniCard from "@/components/comp/cards/StaffMiniCard.vue";
  import StaffCard from "@/components/comp/cards/StaffCard.vue";
  import StudentTable from "@/components/comp/tables/StudentTable.vue";
import Global from "@/services/api/Global";
  export default {
    name: "Index",
    props:['instituteId'],
    components: {
      MainHeader,
      CoverBanner,
      SubMenu,
      PageFooter,
      InstituteDetails,
      UpcomingEvents,
      Stories,
      StoryCategories,
      ClassCard,
      StudentCard,
      StudentMiniCard,
      StaffMiniCard,
      StaffCard,
      StudentTable
    },
    data() {
      return {
        menuItems: [
          {name: 'Stories', link:'#/teacher/'+this.instituteId, icon: 'fa fa-newspaper-o', active: 'active'},
          {name: 'Class', link:'#/teacher/'+this.instituteId+'/class', icon: 'fa fa-users', active: ''},
          {name: 'Staff',link: '#',icon: 'fa fa-user-o',active: ''},
          {name: 'Student',link: '#',icon: 'fa fa-graduation-cap',active: ''},
          {name: 'Event',link: '#',icon: 'fa fa-calendar-o',active: ''},
          {name: 'Message',link: '#',icon: 'fa fa-commenting-o',active: ''},
          // {name: 'Settings',link: 'v-b-modal.classSettingsModal',icon: 'fa fa-cog',active: ''},
        ],
        studentsList: [
            {
                roll: '01',
                student: { image: '/static/images/pro1.png', name: 'Siva Kumar'},
                teacher: { image: '/static/images/cardpro.png', name: 'Roselyn'},
                parents: '02',
                classes: '06'
            },
            {
                roll: '07',
                student: { image: '/static/images/pro1.png', name: 'Mirnalini'},
                teacher: { image: '/static/images/cardpro.png', name: 'Jonathan'},
                parents: '01',
                classes: '03'
            },
            {
                roll: '03',
                student: { image: '/static/images/pro1.png', name: 'John Savior'},
                teacher: { image: '/static/images/cardpro.png', name: 'Jonathan'},
                parents: '01',
                classes: '03'
            },
        ],
        viewMode: 'small',
      };
    },
    async mounted(){
      console.log("Getting refresh token");
      await Global.onPageRefresh(this.$session);
      console.log("Getting User info");
      await this.getUserInfo();
  },
    methods:{
      menuClicked: function(viewMode) {
        this.viewMode=viewMode;
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
</style>
