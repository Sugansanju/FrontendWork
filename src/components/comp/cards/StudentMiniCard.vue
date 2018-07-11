<template>
<div class="card">
    <div style="margin-top:-30px;">
        <img  :src="studentImage" style="margin-top:39px;">
        <div class="d-flex justify-content-end" style="margin-top:-65px; padding-right:5px;">
            <a><i class="fa fa-cog" style="color: #999"></i></a>
        </div>
</div>
    <div class="px-2" style="margin-top:45px;">
        <a style="color: #999">#</a>
        <a class="primary" style="margin-top:-80px;color: var(--main-primary-color); ">{{studentRoll}}</a>
    </div>
    <div class="row">
        <div class="px-4"></div>
        <div  style="margin-top:-72px;margin-left:25px;">
            <a>{{studentName}}</a>
            <div class="">
                <img :src="teacherImage" style="width: 20%">
                <a style="font-size:13px;">{{teacherName}}</a>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="px-4"></div>
        <div class="px-2"></div>
        <div  style="margin-top:-10px;">
            <i class="icon-mu-parents" style="font-size: 18px;"></i>
        </div>
        <div class="px-2 primary" style="font-size:14px;margin-top:-10px;">
            {{parentsCount}}
        </div>
        <div class="" style="margin-top:-10px;">
            <i class="icon-mu-classroom" style="font-size: 18px;"></i>
        </div>
        <div class="px-2 primary" style="font-size:14px;margin-top:-10px;">
            {{classroomsCount}}
        </div>
    </div>
</div>   
</template>
<script>
export default {
    name: 'StudentMiniCard',
    props:['studentRoll', 'studentImage', 'studentName', 'teacherImage', 'teacherName', 'parentsCount', 'classroomsCount'],
    data: function(){
        return{

        }
    }
}
</script>
<style scoped>
.card{
    width: 14%; 
    margin: 10px 10px 10px 10px; 
    padding: 5px 5px 5px 5px; 
    text-align: left; 
    border-radius: 5px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);
    transition: all 0.3s ease-in-out;    
}
.card:hover{
    width: 14%; 
    margin: 10px 10px 10px 10px; 
    padding: 5px 5px 5px 5px; 
    text-align: left; 
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: opacity 0.3s ease-in-out;
}
</style>