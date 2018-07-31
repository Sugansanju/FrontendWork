<template>
<b-container>
    <b-modal id="classModal"
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    centered
    v-model="showClassModal">
        <b-container fluid>
            <b-row>
                <b-col>
                <button type="button" class="close" @click="showClassModal=false" aria-label="Close" style="margin-left:25px;margin-top:0px;" float-right>
                    <span aria-hidden="true">&times;</span>
                </button>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                  <b-tabs>
                    <b-tab title="Class">
                        <class-tab :instituteId="instituteId"></class-tab>
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
export default {
    name: 'ClassModal',
    props:['instituteId'],
    components:{
        ClassTab,

    },
    data: function(){
        return{
            showClassModal: false,
            classroomName:'',
            classroomYear:0,
        }
    },
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



