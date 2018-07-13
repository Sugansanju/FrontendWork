<template>
<b-container fluid>
    <b-row>
        <b-col>
            <b-container class="p-0 m-0" style="height: 300px; overflow: hidden; overflow-y: scroll; overflow-y: scroll;">
                <b-list-group >
                    <b-list-group-item  href="#" style="border: none;">
                        <div class="d-flex flex-row justify-content-start">
                            <div class="p-2">
                                <i class="fa fa-plus-circle fa-2x" aria-hidden="true" style="color: var(--main-primary-color);"></i>
                            </div>
                            <div class="d-flex flex-column text-left">
                                <div class="p-1 m-1"><strong>Add Student</strong></div>
                            </div>
                        </div>
                    </b-list-group-item>
                </b-list-group>
               <b-list-group v-for="item in listItems" v-bind:key="item.name">
                    <b-list-group-item  href="#" style="border: none;">
                        <div class="d-flex flex-row justify-content-start">
                            <div class="p-2">
                                <b-img :src="'/static/images/monsters/'+item.image" width="35px"/>
                            </div>
                            <div class="d-flex flex-column text-left">
                                <div class="p-0 m-0 control-text"><strong>{{item.name}}</strong></div>
                                <div class="p-0 m-0 control-text" style="color: #999;">{{item.contact}}</div>
                            </div>
                        </div>
                    </b-list-group-item>
                </b-list-group>
            </b-container>
        </b-col>
    </b-row>
</b-container>
</template>
<script>
export default {
    name: 'StudentList',
    props:['listItems'],
    data:function(){
        return{

        }
    }
};
</script>
<style>
.control-text{
    display:inline-block;
    width:100%;
    white-space: nowrap;
    overflow:hidden !important;
    text-overflow: ellipsis;
}
</style>


