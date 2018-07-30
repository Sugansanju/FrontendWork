<template>
<div>
    <b-col cols="4">
       <div v-for="item in details" v-bind:key="item.instituteId">
         <div class="institute-card">
            <b-row>
               <b-col offset="10" style="margin-top:-15px;">
                  <b-dropdown variant="link" size="lg" no-caret>
                   <template slot="button-content">
                     <i class="fa fa-cogs primary" aria-hidden="true"></i>
                    </template>
                      <b-dropdown-item v-b-modal.instituteModal>
                      <i class="fa fa-pencil" aria-hidden="true"></i> Edit
                    </b-dropdown-item>
                    <b-dropdown-item @click="deleteDetails">
                      <i class="fa fa-trash" aria-hidden="true" > </i> Delete
                    </b-dropdown-item>
                  </b-dropdown>
                </b-col>
            </b-row>
          <b-row class="content" @click="redirect(item.instituteId)">
              <div class="institute-img">
                <b-img src="/static/images/institute-building.png" />
                 <!-- <b-img :src="'/static/images/'+item.image"/> -->
              </div>
              <div> <h1>{{item.name}}</h1></div>
             <b-row>
              <div class="staff-stats">
                  <strong>{{item.nostaff}}</strong>
                  <br> Staff
              </div>
              <div class="parent-stats">
                  <strong>{{item.nostudent}}</strong>
                  <br> Student
              </div>
              <div class="student-stats">
                  <strong>{{item.noparent}}</strong>
                  <br> Parent
              </div>
           </b-row>
         </b-row>
        <b-row align-h="end" style="padding-right:10px;">
          <div class="feeds-badge">
              <div class="feeds-bubble">
                  <span class="bubble-field">{{item.feedscount}}</span>
              </div>
          </div>
          <div class="chats-badge">
              <div class="chats-bubble">
                  <span class="bubble-field">{{item.chatscount}}</span>
              </div>
          </div>
          <div class="likes-badge">
              <div class="likes-bubble">
                  <span class="bubble-field">{{item.likescount}}</span>
              </div>
          </div>
         </b-row>
        </div>
      </div>
     </b-col>
</div>
</template>
<script>
export default {
  name: "InstituteCard",
  props: ["details"],
  data() {
    return {};
  },
  methods: {
    redirect: function(instituteId) {
      this.$router.replace(
        this.$route.query.redirect || "/teacher/" + instituteId
      );
    },
    deleteDetails: function() {
      alert("Institute Deleted");
    }
  }
};
</script>
<style>
.primary {
  color: var(--main-primary-color);
}
.content {
  margin-top: -40px;
  cursor: pointer;
}
.institute-card {
  background: #fff;
  /* width:350px; */
  /* width:50%; */
  margin-top: 45px;
  height: 150px;
  border-radius: 9px;
  box-shadow: 5px 8px 25px 5px #888888;
  padding: 10px 10px 10px 10px;
}
.institute-img {
  margin-left: 10px;
  margin-top: 13px;
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
  margin-left: 110px;
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
