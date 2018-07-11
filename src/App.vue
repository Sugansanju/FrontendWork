<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  background-color: #F0EFEC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
}
:root {
  --main-primary-color: #45b1cc;
  /* --main-primary-color: #ff99cc; */
}
</style>
