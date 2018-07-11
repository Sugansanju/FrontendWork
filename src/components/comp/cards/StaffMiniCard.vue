<template>
    <div class="card">
    <div style="margin-top:-30px;">
        <img class="px-2" :src="staffImage" width="65" style="margin-top:42px">
        <div class="d-flex justify-content-end" style="margin-top:-60px; padding-right:8px;">
            <a><i class="fa fa-cog" style="color: #999"></i></a>
        </div>
    </div>
    <div class="row">
        <div class="px-4"></div>
        <div  style="margin-top:-5px;margin-left:25px;">
            <a>{{staffName}}</a>
            <div class="" style="font-size:20px;margin-top:2px;">
                <i class="icon-mu-classroom"></i>
            </div>
            <div class="px-4 text-center" style="font-size:10px;margin-top:-30px;">
                <a>Classes</a>
                <div class="primary" style="font-size:14px;">
                    {{classroomsCount}}
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="px-4"></div>
        <div  style="font-size:20px;margin-top:6px;">
            <i class="icon-mu-parents"></i>
        </div>
        <div class="text-center" style="font-size:10px;margin-top:6px;">
            <a>Parents</a>
            <div class="primary" style="font-size:14px;">
                {{parentsCount}}
            </div>
        </div>
        <div class="" style="font-size:20px;margin-top:6px;">
            <i class="icon-mu-student"></i>
        </div>
        <div class="text-center" style="font-size:10px;margin-top:6px;">
            <a>Student</a>
            <div class="primary" style="font-size:14px;">
                {{studentsCount}}
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: 'StaffMiniCard',
    props: ['staffImage', 'staffName', 'classroomsCount', 'parentsCount', 'studentsCount'],
    data: function () {
        return{

        }
    }
};
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
