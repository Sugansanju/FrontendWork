<template>
  <div class="card">
    <div class="d-flex justify-content-end" style="padding-right:10px;margin-top:3px;">
      <a><i class="fa fa-cog" style="color: #999"></i></a>
    </div>
    <div class="text-center">
      <img :src="classImage">
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
  export default {
    name: 'ClassCard',
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