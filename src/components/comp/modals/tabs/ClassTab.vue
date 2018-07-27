<template>
<b-container fluid>
    <b-form>
    <b-row style="margin-top: 25px; ">
        <b-col>
            <avatar-selector :avatars="avatars" :default-avatar="defaultAvatar"></avatar-selector>
        </b-col>
    </b-row>
    <b-row style="padding-top: 25px;">
        <b-col>
            <span>Class Name</span>
        </b-col>
        <b-col cols="8">
            <b-form-input id="classroomName" style="text-align:left;" v-model="classroomName" type="text" required></b-form-input>
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
            <button class="btn btn-1 border" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Reset</button>
            <button class="btn btn-1 btn-2 px-2">Save</button>
        </div>
        </b-col>
    </b-row>
    </b-form>
</b-container>
</template>
<script>
import AvatarSelector from "@/components/comp/misc/AvatarSelector.vue";
export default {
    name: 'ClassTab',
    components:{
        AvatarSelector,
    },
    data:function(){
        return{
            defaultAvatar: 'physics.png',
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
            classroomName:'',
            classroomYear:0,
        }
    }
}
</script>

<style>
.align{

}
</style>

