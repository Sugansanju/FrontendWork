<template>
<div>
<main-header></main-header>
    <page-footer></page-footer>
    <b-container >
      <b-row style="margin-top:30px;">
        <institute-card v-for="detail in details" :details="detail" v-bind:key="detail" ></institute-card>
        <b-col cols="4">
           <div class="institute-card">
              <b-row>
               <b-col align-self="center" >
                  <b-link class="btn" v-b-modal.instituteModal> <i class="fa fa-plus-circle fa-3x icon" aria-hidden="true" ></i></b-link>
               </b-col>
            </b-row>
             </div>
          </b-col>
      </b-row>
    </b-container>
  <institute-modal></institute-modal>
</div>
</template>
<script>
  import MainHeader from "@/components/comp/MainHeader.vue";
  import PageFooter from "@/components/comp/PageFooter.vue";
  import InstituteModal from "@/components/comp/modals/InstituteModal.vue";
  import InstituteApi from "@/services/api/Institute";
  import InstituteCard from "@/components/comp/cards/InstituteCard.vue";
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
        //  details:[],
        details: [
            this.$store.state.instituteDetails
        ],
         defaultInstitute:[
          {
            image:'institute-building.png',
            institutename:'Anna University',
            nostaff:'20',
            nostudent:'35',
            noparent:'10',
            feedscount:'8',
            chatscount:'6',
            likescount:'5'
            },
            ],
        }
    },
    methods:{


    },
    mounted(){
      console.log('mounted Calling');
      this.details.push(this.defaultInstitute);
 }
  };
</script>
<style scoped>
.primary{
    color:var(--main-primary-color);
}
.icon{
    color:var(--main-primary-color);
    margin-top:40px;
}
.institute-card{
            background: #fff;
            height: 150px;
            /* width:350px; */
            border-radius:5px;
            box-shadow: 5px 8px 25px 5px #888888 ;
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

