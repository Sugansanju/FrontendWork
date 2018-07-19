<template>
<!-- <b-container> -->
      <b-col cols="4">
        <b-row>
        <div class="institute-card">
          <b-row v-for="item in details" v-bind:key="item.institutename">
              <div class="institute-img">
                 <b-img :src="'/static/images/'+item.image"/>
              </div>
        <h1>{{item.institutename}}</h1>
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

    <b-row align-h="end" style="padding-right:10px;" v-for="item in details" v-bind:key="item">
        <!-- <div class="float-right"> -->
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
      <!-- </div> -->
    </b-row>
          </div>
        </b-row>
      </b-col>
<!-- </b-container> -->
</template>

<script>
export default {
  name: "InstituteCard",
  props: ["details"],
  data() {
    return {};
  }
};
</script>

<style>
.primary {
  color: var(--main-primary-color);
}
.institute-card {
  background: #fff;
  /* width:350px; */
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
/* .card {
  height: 200px;
  width: 350px;
  margin: 10px 10px 10px 10px;
  padding: 5px 5px 5px 5px;
  text-align: left;
  border-radius: 5px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
}
.content {
  margin-top: 20px;
  padding: 0 0 0 0;
}
.card-content {
  font-size: 20px;
  margin-left: 9px;
  float: left;
  text-align: center;
} */
</style>
