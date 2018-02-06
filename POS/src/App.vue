<template>
  <div id="app">
   <left-nav></left-nav>
  <div class="main">
    <router-view></router-view>
  </div>
  </div>
</template>

<script>
import leftNav from '@/components/public/leftNav'
export default {
  name: 'App',
  components:{
    leftNav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main{
  width:95%;
  height: 100%;
  background-color: azure;
  float: left;
}
</style>
