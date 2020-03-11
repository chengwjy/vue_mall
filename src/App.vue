<template>
  <div id="app">
    <router-view></router-view>
    <TabBar>
      <!-- 父传子 -->
      <TabBarItem 
        v-for="tb in tabbars" 
        :key="tb.name" 
        :name="tb.name" 
        :icon="tb.icon"
        :on_icon="tb.on_icon"
        :url="tb.url"
      ></TabBarItem>
    </TabBar>
  </div>
</template>
<script>
// 导入菜单配置
import tbConfig from "@/config/tabbar.js"
import TabBar from "@/components/tabbar/TabBar.vue"
import TabBarItem from "@/components/tabbar/TabBarItem.vue"
export default {
  name:'App',
  data(){
    return {
      tabbars:tbConfig
    }
  },
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style>
  /* 固定语法。在style中引入css */
  @import "./assets/css/base.css";


</style>
