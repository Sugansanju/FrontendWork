<template>
  <div>
    <main-header></main-header>
    <page-footer></page-footer>
    <b-container fluid>
      <b-row>
        <b-col cols="3" style="margin-top:5%">
            <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="content">
                  <img src="/static/images/university.png" width="84px;">
                </div>
                <div style="margin-top:-100px;margin-left:50px;">
                   <h4 class="text-center primary">Anna University</h4>
                   <div class="container">
                      <div style="margin-top:20px;">
                      	<div class="card-content px-2">
                      		123<br>Staff
                        </div>
                         <div class="card-content px-2">
                         200<br>Student
                         </div>
                          <div class="card-content px-2">
                          58<br>Parent
                          </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            </div>
        </b-col>
        <b-col cols="3" class="text center" style="margin-top:5%">
            <div class="card">
            <div class="card-body">
              <div class="d-flex justify-content-center">
                  <b-link class="btn" v-b-modal.instituteModal> <i class="fa fa-plus-circle fa-3x icon" aria-hidden="true" ></i></b-link>
              </div>
            </div>
            </div>
        </b-col>
      </b-row>
       <institute-modal></institute-modal>
    </b-container>

  </div>
</template>
<script>
  // import store from '../store'
  import MainHeader from "@/components/comp/MainHeader.vue";
  import PageFooter from "@/components/comp/PageFooter.vue";
  import InstituteModal from "@/components/comp/modals/InstituteModal.vue";
  export default {
    name: "Institute",
    components: {
      MainHeader,
      InstituteModal,
      PageFooter
    },
    data() {
      return {

        }

    },
    // mounted(){
    //   window.location.reload();
    // }


  };
</script>
<style scoped>
.primary{
    color:var(--main-primary-color);
}
.icon{
    color:var(--main-primary-color);
    margin-top:50px;
}
.card{
   height:200px;
    width:350px;
    margin: 10px 10px 10px 10px;
    padding: 5px 5px 5px 5px;
    text-align: left;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: all 0.3s ease-in-out;
}
.content{
  margin-top:20px;
}
.card-content{
font-size:20px;
margin-left:9px;
float: left;
text-align: center
}
</style>

