<template>
	<b-container style="text-align: left; ">
         <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="px-2" style="margin-top:-12px;">
                  <img src="/static/images/bitmap.png">
                </div>
                <div class="px-4">
                  <span style="margin-top:-12px;">All Story</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="px-2" style="margin-top:-12px;">
                  <img src="/static/images/institute.png">
                </div>
                <div class="px-4">
                  <span style="margin-top:-12px;">Institute Story</span>
                </div>
              </div>
            </div>
          </div>
          <div class="card ">
            <div class="card-body">
              <div class="row">
                <div class="px-2" style="margin-top:-12px;">
                  <img src="/static/images/class.png">
                </div>
                <div class="px-4 ">
                  <span style="margin-top:-12px;">Class Story</span>
                </div>
              </div>
            </div>
          </div>
          Staff Stories
          <div class="card">
            <div class="card-scroll">
              <div class="row">
                <div class="staff-img">
                  <img class="staffImg-story" src="/static/images/img2.png">
                </div>
                <div class="px-1" style="margin-top:14px;">
                  <a>Felicia</a>
                </div>
              </div>
              <div class="row">
                <div class="staff-img">
                  <img class="staffImg-story" src="/static/images/img1.png">
                </div>
                <div class="px-1" style="margin-top:14px;">
                  <a>Roselyn</a>
                </div>
              </div>
              <div class="row">
                <div class="staff-img">
                  <img class="staffImg-story" src="/static/images/img3.png">
                </div>
                <div class="px-1" style="margin-top:14px;">
                  <a>Jonathan</a>
                </div>
              </div>
              <div class="row">
                <div class="staff-img">
                  <img class="staffImg-story" src="/static/images/img2.png">
                </div>
                <div class="px-1" style="margin-top:14px;">
                  <a>Felicia</a>
                </div>
              </div>
              <div class="row">
                <div class="staff-img">
                  <img class="staffImg-story" src="/static/images/img1.png">
                </div>
                <div class="px-1" style="margin-top:14px;">
                  <a>Roselyn</a>
                </div>
              </div>
              <div class="row">
                <div class="staff-img">
                  <img class="staffImg-story" src="/static/images/img3.png">
                </div>
                <div class="px-1" style="margin-top:14px;">
                  <a>Jonathan</a>
                </div>
              </div>
              <div class="row">
                <div class="staff-img">
                  <img class="staffImg-story" src="/static/images/img1.png">
                </div>
                <div class="px-1" style="margin-top:14px;">
                  <a>Roselyn</a>
                </div>
              </div>
              <div class="row">
                <div class="staff-img">
                  <img class="staffImg-story" src="/static/images/img3.png">
                </div>
                <div class="px-1" style="margin-top:14px;">
                  <a>Jonathan</a>
                </div>
              </div>
            </div>
          </div> 		
	</b-container>
	
</template>
<script type="text/javascript">
	export default{
		data: function(){
			return{

			}
		}
	};
</script>
<<style type="text/css" scoped>
  .staff-img {
    background: #fff;
    border: 5px solid #fff;
    border-radius: 50%;
    height: 45px;
    position: relative;
    width: 45px;
  }
  .staff-img:hover{
    cursor: pointer;    
    border: 0px solid var(--main-primary-color);    
  }
  
  .staffImg-story {
    -moz-force-broken-image-icon: 1;
    border-radius: 50%;
    height: 100%;
    left: 0;
    position: relative;
    top: 0;
    cursor: pointer;
    width: 100%;
  }	
  .card-scroll {
    height: 250px;    
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 10px 10px 10px 15px;
  }	
  .card-scroll a:hover{
    cursor: pointer;    
    color: var(--main-primary-color);
  } 
  .card-body:hover{
    cursor: pointer;    
    border: 1px solid var(--main-primary-color);
    opacity: 0.8;
  }
</style>
