<template>
<b-container>
<div class="dropdown">
    <div class="dropbtn">
      <b-img :src="'/static/images/'+selectedAvatar"></b-img>
      <i class="fa fa-caret-down" style="color: #999; position: absolute; margin-left: 30px"></i>
    </div>  
  <div class="dropdown-content">
      <b-container>
          <b-row>
              <b-col>
                <a class="btn" href="#" v-for="avatar in avatars" v-bind:key="avatar" @click="selectedAvatar=avatar"><b-img :src="'/static/images/'+avatar"></b-img></a>                
              </b-col>
          </b-row>
      </b-container>
  </div>
</div>        
</b-container>
</template>
<script>
export default {
    name:'AvatarSelector',
    props:['defaultAvatar','avatars'],
    created:function(){
        this.selectedAvatar=this.defaultAvatar;
    },
    data: function(){
        return{            
            selectedAvatar:'',
        }
    }
};
</script>
<style>
.dropbtn {
    /* background-color: transparent; */
    color: white;
    padding: 16px;
    font-size: 16px;
    border: 1px solid #999;
    border-radius: 10px;
    cursor: pointer;
}
.dropdown {
    position: relative;
    display: inline-block;
}
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    width: 275px;
    height: 150%;
    overflow-y: scroll; 
    overflow-x: hidden;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 5px;
    z-index: 1;
}
.dropdown-content a {
    color: black;
    padding: 5px;
}
.dropdown-content a:hover {background-color: #f1f1f1}
/* .dropdown:active {display: none;} */
.dropdown:hover .dropdown-content {
    display: block;
}

 .dropdown:hover .dropbtn {
    background-color: #f1f1f1;
} 
</style>

