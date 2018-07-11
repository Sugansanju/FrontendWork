<template>
    <b-container fluid>
        <b-dropdown class="dropdown" v-bind:style="defaultAvatar">
            <b-container fluid>
                <b-row>
                    <b-col>
                    <b-dropdown-item class="dropdown-item" 
                        v-for="avatar in avatarList" 
                        v-bind:key="avatar.key" 
                        v-bind:style="avatar.value">
                    </b-dropdown-item>    
                    </b-col>                    
                </b-row>
            </b-container>            
        </b-dropdown>
    <!-- <div class="dropdown class-icon-selection-dropdown">
        <button class="btn btn-default dropdown-toggle-button" data-toggle="dropdown" id="avatarSelector" aria-expanded="true">
        <img src="/static/images/chemistry.png"> <i class="fa fa-caret-down"></i>
        </button>
        <ul class="dropdown-menu" id="dropdown-image-add-class" aria-labelledby="avatarSelector">
        <ul class="list-inline">
            <li v-for="list in studentImages" :key="list.avatar"><a @click="selectImageFromEdit(list.avatar)"><img :src="'/static/images/student_images/'+list.avatar" width="90%"></a>
            </li>
            <li>
                <a><img src="/static/images/physics.png" width="90%"></a>
            </li>
            <li>
                <a><img src="/static/images/physics.png" width="90%"></a>
            </li>
            <li>
                <a><img src="/static/images/physics.png" width="90%"></a>
            </li>
        </ul>
        </ul>
    </div> -->
    </b-container>
</template>
<script>
export default {
    name: 'AvatarSelector',
    data: function(){
        return{
            defaultAvatar:{                
                backgroundImage: "url('/static/images/physics.png')",
            },
            avatarList:[
                {
                    key:'/static/images/physics.png',
                    value: { backgroundImage: "url('/static/images/physics.png')"},
                },
                {
                    key:'/static/images/chemistry.png',
                    value: { backgroundImage: "url('/static/images/chemistry.png')"},
                },
                {
                    key:'/static/images/maths.png',
                    value: { backgroundImage: "url('/static/images/maths.png')"},
                },                
                
            ],
        }
    },
}
</script>
<style scoped>
.dropdown{
    background-size:100% auto;
    width: 75px;
    height: 75px;
}
.dropdown-item{
    width: 50px;
    height: 50px;
    background-size:100% auto;
}
.dropdown-toggle{ 
    border-color: transparent;           
    background-color: transparent;
    width: 100%;
}
.btn-secondary{
    background-color: transparent;
    border-color: transparent;
    width: 100%;    
}
.dropdown-toggle:hover{        
    background-color: transparent;
    color: #999;
    border-color: #999;
    width: 100%;
}
.dropdown-toggle:show{        
    background-color: transparent;
    color: #999;
    border-color: #999;
    width: 100%;
}
.btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active, .show > .btn-secondary.dropdown-toggle{
    background-color: transparent;
    color: #999;
    border-color: #999;
    width: 100%;    
}
</style>


