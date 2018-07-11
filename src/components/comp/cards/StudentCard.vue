<template>  
    <div class="card">
      <div>
        <span style="color: #999">
          #
        </span>
        <span class="primary" style="margin-top:-80px;color: var(--main-primary-color); ">
          {{studentRoll}}
        </span>
        <div class="d-flex justify-content-end" style="margin-top:-25px;">
          <a><i class="fa fa-cog" style="color: #999"></i></a>
        </div>
      </div>
        <div class="text-center">
            <img :src="studentImage">
        </div>
        <div class="text-center mt-2">
        <a>{{studentName}}</a>
        </div>
        <div class="text-center">
        <img :src="teacherImage" style="width: 20%">
        <a style="font-size:13px;">{{teacherName}}</a>
        </div>
        <div class="row mt-2">
            <div class="col-2"></div>
            <div  style="font-size:20px;margin-top:16px;">
                <i class="icon-mu-parents"></i>
            </div>
            <div class="text-center" style="font-size:10px;margin-top:12px;">
                <a> Parents</a>
                <div class="primary" style="font-size:14px;">
                {{parentsCount}}
                </div>
            </div>
            <div class="" style="font-size:20px;margin-top:16px;">
                <i class="icon-mu-classroom"></i>
            </div>
            <div class="text-center" style="font-size:10px;margin-top:12px;">
                <a> Classes</a>
                <div class="primary" style="font-size:14px;">
                {{classroomsCount}}
                </div>
            </div>
        </div>
    </div>  
</template>
<script>
export default {
    name: 'StudentCard',
    props:['studentRoll', 'studentImage', 'studentName', 'teacherImage', 'teacherName', 'parentsCount', 'classroomsCount'],
  data: function() {
    return {};
  }
};
</script>
<style scoped>
.card{
    width: 13%; 
    margin: 10px 10px 10px 10px; 
    padding: 5px 5px 5px 5px; 
    text-align: left; 
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: all 0.3s ease-in-out;    
}
.card:hover{
    width: 13%; 
    margin: 10px 10px 10px 10px; 
    padding: 5px 5px 5px 5px; 
    text-align: left; 
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: opacity 0.3s ease-in-out;
}
</style>

