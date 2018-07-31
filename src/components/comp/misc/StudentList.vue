<template>
<b-container fluid style="padding:0 0 0 0;">
    <b-row>
        <b-col>
               <div v-bind:class="{'is-form' : form }" style="margin-top:30px">
                        <b-row>
                            <b-col>
                              <div class="input-group mb-3">
                              <div class="input-group-prepend" >
                               <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                              <i class="fa fa-pencil" aria-hidden="true"></i>
                                </span>
                              </div>
                          <input type="text"
                                class="form-control"
                                placeholder="First and last name"
                                style="border-radius:  0px 50px 50px 0px;">
                             </div>
                         </b-col>
                       </b-row>
                          <b-row>
                            <b-col>
                              <div class="input-group mb-3">
                              <div class="input-group-prepend" >
                               <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                              <i class="fa fa-user" aria-hidden="true"></i>
                                </span>
                              </div>
                          <input type="text"
                                class="form-control"
                                placeholder="email/mobile"
                                style="border-radius:0px 50px 50px 0px;">
                             </div>
                         </b-col>
                       </b-row>
                       <div class="mt-3 staffmodal-btn">
                        <button class="btn btn-1 button1">Bulk import</button>
                        <button class="btn btn-1 btn-2" @click='form=!form'>Add</button>
                     </div>
                </div>
                <b-container class="p-0 m-0" style="height: 300px; overflow: hidden; overflow-y: scroll; overflow-y: scroll;">
               <b-col class="list">
                <b-list-group>
                    <b-list-group-item  href="#" style="border: none;" v-if="!form==add">
                        <div class="d-flex flex-row justify-content-start" @click='form=!form'>
                            <div class="p-2">
                                <i class="fa fa-plus-circle fa-2x" aria-hidden="true" style="color: var(--main-primary-color);"></i>
                            </div>
                            <div class="d-flex flex-column text-left">
                                <div class="p-1 m-1"><strong>Add Student</strong></div>
                            </div>
                        </div>
                    </b-list-group-item>
                </b-list-group>
                <!-- <b-container class="p-0 m-0" style="height: 300px; overflow: hidden; overflow-y: scroll; overflow-y: scroll;"> -->
               <b-list-group  v-for="item in listItems" v-bind:key="item.name">
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
               </b-col>
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
           add: false,
           form: true

        }
    },
    methods:{

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
.is-form {
  display: none;
}
.list{
  width:100%;
  padding:0 0 0
}
 .button1{
   background-color: #fff;
   color:var(--main-primary-color);
   border: 2px solid var(--main-primary-color);
 }
  .staffmodal-btn{
   margin-left:150px;
 }
</style>


