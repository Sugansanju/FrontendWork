<template>
	<b-container  style="padding-top: 10px;">
		  <div  id="institute-title" class="row" v-if="instituteTitle">
          <h4 class="px-2">Dexter Academy</h4>
          <img src="/static/images/ic.png" width="18" height="18" style="margin-top:8px;">
       </div>
        <div class="row">
          <div style="font-size: 13px; width: 90%;">
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </div>          
        </div>
        <div class="row" style="margin-top:12px;">
          <!-- <img src="/static/images/place.png" width="19" height="19"> -->
          <i class="fa fa-map-marker" aria-hidden="true"></i>
          <div class="px-2">Tamilnadu, India</div>
        </div>
        <div class="row" style="margin-top:12px;">
          <!-- <img src="/static/images/web.png" width="19" height="19"> -->
          <i class="fa fa-globe" aria-hidden="true"></i>
          <div class="px-2">https://www.dexteracademy.in</div>
        </div>
        <div class="row" style="margin-top:12px;">
          <!-- <img src="/static/images/calender.png" width="19" height="19"> -->
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <div class="px-2">Joined December 2015</div>
   </div>
</b-container>
</template>
<script type="text/javascript">
	export default{
		data:function(){
			return{
				instituteTitle: true,
			}
		},
  methods: {
      handleScroll (event) { 
        // console.log(window.scrollY);
        // console.log($("#sub-menu").offset().top + ' ' + $( document ).scrollTop() ) ;                
        if(window.scrollY > 400){
          this.instituteTitle=false;          
        }
        if(window.scrollY < 400){                   
          this.instituteTitle=true;          
        }
      }
  },
  created () {
      document.addEventListener('scroll', this.handleScroll);   
  },     
	};
</script>
<style scoped>
  i{
    color: var(--main-primary-color);
  }
</style>