<template>
    <footer class="footer">
     <div class="container center">
       <div class="row justify-content-center">
        <a class="nav-link js-scroll-trigger" href="">All rights reserved &copy;
        <span style="color:#9acd32;font-size:18px;">dexter</span>
        <span style="color:#ace6fd;font-size:18px;">dojo</span> </a>
       </div>
     </div>
   </footer>
</template>
<script>
export default {
    name: 'PageFooter',
    data:function(){
        return{

        }
    }
};
</script>
<style scoped>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    color: white;
    text-align: center;
    z-index: 999;
}
a{
    color: #000;
}
a:hover{
    color: #68b8b6;
}
</style>



