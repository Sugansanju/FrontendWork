<template>
<b-container>
    <b-modal id="EditInstituteModal"
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    centered
    v-model="showEditInstituteModal">
        <b-container fluid>
            <b-row>
                <b-col>
                <img src="/static/images/logo.png" float-center>
                <button type="button" class="close" @click="showEditInstituteModal=false" aria-label="Close" style="margin-left:25px;margin-top:0px;" float-right>
                    <span aria-hidden="true">&times;</span>
                </button>
                </b-col>

            </b-row>
            <b-row>
                <b-col>
                  <b-tabs>
                    <b-tab title="Profile Settings">
                        <b-container>
                            <b-row style="margin-top: 25px; ">
                                <b-col>
                                    <b-img src="/static/images/avatar.png"> </b-img>
                                </b-col>
                            </b-row>
                            <b-row style="margin-top: 25px; ">
                                <b-col>
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend" >
                                        <span class="input-group-text" style="border-radius: 50px 0px 0px 50px; width: 40px;">
                                        <i class="fa fa-user" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="first and last name" style="border-radius:  0px 50px 50px 0px;">
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend" >
                                        <span class="input-group-text" style="border-radius: 50px 0px 0px 50px; width: 40px;">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="email" style="border-radius:  0px 50px 50px 0px; ">
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend" >
                                        <span class="input-group-text" style="border-radius: 50px 0px 0px 50px; width: 40px;">
                                        <i class="fa fa-phone-square" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="mobile number" style="border-radius:  0px 50px 50px 0px;">
                                    </div>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                <hr>
                                <div class="float-right">
                                    <button class="btn btn-1 border" @click="showEditInstituteModal=false" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Skip</button>
                                    <button class="btn btn-1 btn-2 px-2">Update</button>
                                </div>
                                </b-col>
                            </b-row>
                        </b-container>
                    </b-tab>
                  </b-tabs>
                </b-col>
            </b-row>
  </b-container>
</b-modal>
</b-container>
</template>
<script>
    export default {
        name: 'EditInstituteModal',
        data: function() {
            return {
                showEditInstituteModal: false,
            }
        }
    };

</script>
<style>
.modal-backdrop {
    background-color: var(--main-primary-color);
}

.modal-content {
    border-radius: 25px;
}
</style>
