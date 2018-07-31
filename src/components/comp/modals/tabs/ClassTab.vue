<template>
<b-container fluid>
    <b-form @submit.prevent="onSubmit">
    <b-row style="margin-top: 25px; ">
        <b-col>
            <avatar-selector :avatars="avatars" :default-avatar="defaultAvatar" v-model="classroomAvatar"></avatar-selector>
        </b-col>
    </b-row>
    <b-row style="padding-top: 25px;">
        <b-col>
            <span>Name</span>
        </b-col>
        <b-col cols="8">
            <b-form-input id="classroomName" v-model="classroomName"  style="text-align:left;" type="text" required></b-form-input>
        </b-col>
    </b-row>
    <b-row  style="padding-top: 25px;">
        <b-col>
            <span>Year</span>
        </b-col>
        <b-col cols="8">
            <b-form-select id="classroomYear" v-model="classroomYear" :options="years" required>
                <template slot="first">
                    <option value="0">Select Year</option>
                </template>
            </b-form-select>
        </b-col>
    </b-row>
    <b-row>
        <b-col>
        <hr>
        <div class="float-right">
            <a class="btn btn-1 border"  style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Reset</a>
            <button type="submit" class="btn btn-1 btn-2 px-2">Save</button>
        </div>
        </b-col>
    </b-row>
    </b-form>
</b-container>
</template>
<script>
import ClassSettingsModal from "@/components/comp/modals/ClassSettingsModal.vue"
import AvatarSelector from "@/components/comp/misc/AvatarSelector.vue";
import ClazzApi from "@/services/api/Clazz";
export default {
    name: 'ClassTab',
    props:['instituteId'],
    components:{
        AvatarSelector,
        ClassSettingsModal
    },
    data:function(){
        return{
            defaultAvatar: 'physics.png',
            title:'Demo Class',
            avatars:[
                'physics.png',
                'chemistry.png',
                'maths.png',
                // 'physics.png',
                // 'chemistry.png',
                // 'maths.png',
                // 'physics.png',
                // 'chemistry.png',
                // 'maths.png',
            ],
            years:[
                {value: 1, text: 'Year 1'},
                {value: 2, text: 'Year 2'},
                {value: 3, text: 'Year 3'},
                {value: 4, text: 'Year 4'},
                {value: 5, text: 'Year 5'},
                {value: 6, text: 'Year 6'},
                {value: 7, text: 'Year 7'},
                {value: 8, text: 'Year 8'},
                {value: 9, text: 'Year 9'},
                {value: 10, text: 'Year 10'},
                {value: 11, text: 'Year 11'},
                {value: 12, text: 'Year 12'},
            ],
            classroomAvatar:'',
            classroomName:'',
            classroomYear:0,
        }
    },
    methods:{
        onSubmit(){
            // alert('Hello World');
            let data={
                "name" : this.classroomName,
                "avatar" : this.classroomAvatar,
                "year" : this.classroomYear,
            };
            ClazzApi.createClazz(this.instituteId, data)
            .then((response)=>{
                console.log(response);
                 window.location.reload();
            }).catch((err)=>{
                console.log(err);
            });
        }
    }

}
</script>


