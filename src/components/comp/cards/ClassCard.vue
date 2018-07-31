<template>
  <div class="card">
    <div>
    <b-col offset="7" style="margin-top:-10px;margin-left=10px;">
      <b-dropdown variant="link" size="lg" no-caret>
                   <template slot="button-content">
                    <i class="fa fa-cog" style="color: #999"></i>
                    </template>
                           <b-dropdown-item v-b-modal.classSettingsModal>
                      <i class="fa fa-cog" aria-hidden="true"></i>Settings
                    </b-dropdown-item>
                    <b-dropdown-item>
                      <i class="fa fa-trash" aria-hidden="true" > </i> Delete
                    </b-dropdown-item>
                  </b-dropdown>
    </b-col>
    </div>
    <div class="text-center">
      <!-- <img :src="classImage"> -->
       <b-img :src="classImage"/>
    </div>
    <div class="text-center mt-2">
      <a>{{className}}</a>
    </div>
    <div class="text-center" >
      <img :src="teacherImage">
      <a style="font-size:13px;">{{teacherName}}</a>
    </div>
    <div class="row mt-2">
      <div class="col-2"></div>
      <div style="font-size:20px;margin-top:16px;">
        <a><i class="icon-mu-parents"></i></a>
      </div>
      <div class="text-center" style="font-size:10px;margin-top:12px;">
        <a> Parents</a>
        <div class="primary" style="font-size:14px;">{{parentsCount}}</div>
      </div>
      <div class="" style="font-size:20px;margin-top:16px;">
        <a><i class="icon-mu-student"></i></a>
      </div>
      <div class="text-center" style="font-size:10px;margin-top:12px;">
        <a> Students</a>
        <div class="primary" style="font-size:14px;">{{studentsCount}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import ClassSettingsModal from "@/components/comp/modals/ClassSettingsModal.vue";
  export default {
    name: 'ClassCard',
    components:{
      ClassSettingsModal
    },
    props: ['classImage', 'className', 'teacherImage', 'teacherName', 'parentsCount', 'studentsCount'],
    data: function() {
      return {

      }
    }
  }
</script>

<style scoped>
  .card {
    width: 13%;
    margin: 10px 10px 10px 10px;
    text-align: left;
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease-in-out;
  }

  .card:hover {
    width: 13%;
    margin: 10px 10px 10px 10px;
    text-align: left;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease-in-out;
  }
</style>
