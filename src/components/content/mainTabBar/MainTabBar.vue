<template>
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
</template>
<script>
// 导入菜单配置
import tbConfig from "config/tabbar.js"
// 进一步封装tabbar
import TabBar from "components/common/tabBar/TabBar"
import TabBarItem from "components/common/tabBar/TabBarItem"

export default {
    name: 'main-tab-bar',
    data(){
        return {
            tabbars: tbConfig
        }
    },
    components:{
        TabBar,
        TabBarItem
    }
}
</script>