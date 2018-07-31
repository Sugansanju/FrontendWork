<template>
<b-container fluid>
    <b-row style="margin-top: 25px; ">
        <b-col>
            <teacher-list :listItems="teachers"></teacher-list>
        </b-col>
    </b-row>
    <b-row>
        <b-col>
        <hr>
        <div class="float-right">
            <!-- <button class="btn btn-1 border" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Reset</button> -->
            <button class="btn btn-1 btn-2 px-2" @click="showClassSettingsModal=false">Close</button>
        </div>
        </b-col>
    </b-row>
</b-container>
</template>
<script>
import TeacherList from "@/components/comp/misc/TeacherList.vue";
export default {
    name: 'TeacherTab',
    components:{
        TeacherList,
    },
    data: function(){
        return{
            teachers:[
                {image: '01.png', name:'Priya Dharshini', contact:'priya@example.com'},
                {image: '02.png', name:'Divya Shri', contact:'9876543210'},
                {image: '03.png', name:'Ram Kumar', contact:'ramkumar@example.com'},
                {image: '04.png', name:'Shri Hari', contact:'srihari@gmail.com'},
                {image: '05.png', name:'Nithya Kalayani', contact:'9876543210'},
                {image: '06.png', name:'Muhamed Farook', contact:'farook@example.com'},
                {image: '07.png', name:'Rishwan', contact:'rishwan@example.com'},
                {image: '08.png', name:'Chinna Raj', contact:'chinnaraj123@example.com'},
                {image: '09.png', name:'Jeya Pandian', contact:'jeyapandian@example.com'},
            ],
        }
    },
    methods:{
      cancel:function(){
        this.showClassSettingsModal=false;
      }
    }
};
</script>
