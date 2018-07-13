<template>
<b-container>
    <b-modal id="classSettingsModal"
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    centered
    v-model="showClassSettingsModal">
        <b-container fluid>
            <b-row>
                <b-col>
                <!-- <img src="/static/images/logo.png" float-center> -->
                Demo Class
                <button type="button" class="close" @click="showClassSettingsModal=false" aria-label="Close" style="margin-left:25px;margin-top:0px;" float-right>
                    <span aria-hidden="true">&times;</span>
                </button>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                  <b-tabs>
                    <b-tab title="Class">
                        <class-tab></class-tab>
                    </b-tab>
                    <b-tab title="Student">
                        <student-tab></student-tab>
                    </b-tab>
                    <b-tab title="Teacher">
                        <teacher-tab></teacher-tab>
                    </b-tab>
                  </b-tabs>
                </b-col>
            </b-row>
        </b-container>
    </b-modal>
</b-container>
</template>
<script>

import ClassTab from "@/components/comp/modals/tabs/ClassTab.vue";
import StudentTab from "@/components/comp/modals/tabs/StudentTab.vue";
import TeacherTab from "@/components/comp/modals/tabs/TeacherTab.vue";

export default {
    name: 'ClassSettingsModal',
    components:{
        ClassTab,
        StudentTab,
        TeacherTab,
    },
    data: function(){
        return{
            showClassSettingsModal: false,
            classroomName:'',
            classroomYear:0,
        }
    }
};
</script>
<style>
    a {
        color: #68b8b6;
    }

    a:hover {
        color: #b8bbbb;
    }

    .input-box {
        border-radius: 20px;
    }

    input::placeholder {
        text-align: center;
    }

    input {
        text-align: center;

    }
    .btn-1 {
        border-radius: 20px;
        width: 95px;
        padding: 3px;
        margin: auto;
        background-color: #fff;
    }
    .btn-2 {
        background-color: var(--main-primary-color);
        color: #fff;
    }
    .modal-backdrop {
        background-color: var(--main-primary-color);
    }

    .modal-content {
        border-radius: 25px;
    }
</style>



