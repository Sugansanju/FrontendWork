<template>
    <div class="card">
        <div class="d-flex justify-content-end" style="margin-top:2px;padding-right:10px;">
        <a><i class="fa fa-cog" style="color: #999"></i></a>
        </div>
        <div class="text-center">
            <img :src="staffImage">
        </div>
        <div class="text-center">{{staffName}}</div>
        <div class="row">
            <div class="px-5 mt-2">
                <i class="icon-mu-classroom"></i>
            </div>
            <div class="text-center mt-2" style="font-size:10px;margin-left:-40px;">
                <a>Classes</a>
                <div class="primary" style="font-size:14px;">
                    {{classroomsCount}}
                </div>
            </div>
            <div class="row">
                <div class="col-2"></div>
                <div class="px-2" style="font-size:20px;margin-top:16px;">
                    <i class="icon-mu-parents"></i>
                </div>
                <div class="text-center" style="font-size:10px;margin-top:12px;">
                    <a>Parents</a>
                    <div class="primary" style="font-size:14px;">
                        {{parentsCount}}
                    </div>
                </div>
                <div class="px-2" style="font-size:20px;margin-top:16px;">
                    <i class="icon-mu-student"></i>
                </div>
                <div class="text-center" style="font-size:10px;margin-top:12px;">
                    <a>Students</a>
                    <div class="primary" style="font-size:14px;">
                        {{studentsCount}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'StaffCard',
     props: ['staffImage', 'staffName', 'classroomsCount', 'parentsCount', 'studentsCount'],
    data:function () {
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
