<template>
<b-container>
    <b-modal id="instituteModal"
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    centered
    v-model="showInstituteModal">
        <b-container fluid>
            <b-row>
                <b-col>
                <button type="button" class="close" @click="showInstituteModal=false" aria-label="Close" style="margin-left:25px;margin-top:0px;" float-right>
                    <span aria-hidden="true">&times;</span>
                </button>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
<b-tabs>
  <b-tab title="ADD INSTITUTE">
      <b-container fluid style="margin-top: 50px;">
          <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-university" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text" class="form-control" placeholder="Institute Name" style="border-radius:  0px 50px 50px 0px;">
                </div>
              </b-col>
          </b-row>
          <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-address-card" aria-hidden="true"></i></span>
                </div>
                  <input type="text" class="form-control" placeholder="Address"  style="border-radius:  0px 50px 50px 0px;">
                </div>
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-street-view" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text" class="form-control" placeholder="Street" style="border-radius:  0px 50px 50px 0px;">
                </div>
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                      <i class="fa fa-globe" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text" class="form-control" placeholder="City" style="border-radius:  0px 50px 50px 0px;">
                </div>
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                   <i class="fa fa-phone" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text" class="form-control" placeholder="Contact" style="border-radius:  0px 50px 50px 0px;">
                </div>
              </b-col>
          </b-row>
           <b-row>
              <b-col>
                <div class="input-group mb-3">
                <div class="input-group-prepend" >
                    <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                    <i class="fa fa-tty" aria-hidden="true"></i>
                    </span>
                </div>
                  <input type="text" class="form-control" placeholder="Zipcode" style="border-radius:  0px 50px 50px 0px;">
                </div>
              </b-col>
          </b-row>

          <b-row>
              <b-col>
              </b-col>
          </b-row>
          <b-row>
            <b-col>
                <hr>
                  <div class="float-right">
                    <button class="btn btn-1 border" @click="showInstituteModal=false" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Cancel</button>
                    <button class="btn btn-1 btn-2 px-2">Add</button>
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
        name: 'InstituteModal',
        methods:{

        },
        data: function() {
            return {
                showInstituteModal: false,
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
