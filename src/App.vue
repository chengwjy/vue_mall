<template>
  <div id="app">
    <router-view></router-view>
    <MainTabBar/>
  </div>
</template>
<script>

import MainTabBar from "components/content/mainTabBar/MainTabBar"
export default {
  name:'App',
  data(){
    return {
    }
  },
  components:{
    MainTabBar
  }
}
</script>
<style>
  /* 固定语法。在style中引入css */
  @import "./assets/css/base.css";


</style>
