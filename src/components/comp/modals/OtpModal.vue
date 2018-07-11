<template>
<b-container>
<b-modal id="otpModal" 
    hide-header
    hide-footer
    no-close-on-backdrop 
    no-close-on-esc
    centered
    v-model="showOtpModal">
    <b-container fluid>
        <b-row>
            <b-col>
            <!-- <img src="/static/images/logo.png" float-center> -->
            <button type="button" class="close" @click="showOtpModal=false" aria-label="Close" style="margin-left:25px;margin-top:0px;" float-right>
                <span aria-hidden="true">&times;</span>
            </button>
            </b-col>            
        </b-row>        
        <b-row>
            <b-col>
                <b-tabs>
                    <b-tab title="Otp">
                        <b-container>
                            <b-row style="margin-top: 25px; ">
                                <b-col>
                                    <p style="color: #999;">Please enter the Otp sent to your email/mobile number</p>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                    <div class="input-group mb-3">
                                    <div class="input-group-prepend" >
                                        <span class="input-group-text" style="border-radius: 50px 0px 0px 50px; width: 40px;">
                                        <i class="fa fa-key" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="****" style="border-radius:  0px 50px 50px 0px;">
                                    </div>                  
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col>
                                <hr>
                                <div class="float-right">
                                    <button class="btn btn-1 border" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Resend</button>
                                    <button class="btn btn-1 btn-2 px-2">Verify</button>
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
        name: 'OtpModal',
        data: function() {
            return{
                showOtpModal: false,    
            }            
        },
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
