<template>
    <div class="tab-bar-item" @click="itemClick" :style="activeStyle">
        <img :src="active ? on_icon : icon" alt="">
        <div>{{name}}</div>
    </div>
</template>
<script>
export default {
    name:'TabBarItem',
    data(){
        return {
            
        }
    },
    props:{
        name:String
        ,
        icon:String
        ,
        on_icon:String
        ,
        url:String
        ,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    computed:{
        // 是否在当前路由，及当前路由的子路由
        active(){
            // index是精髓，解决子路由匹配url值的问题
            // 比如 /home/hot 匹配 /home
            return this.$route.path.indexOf(this.url) != -1
        },
        // 选中的样式 
        activeStyle(){
            return this.active ? {color:this.activeColor} : {}
        }
    },
    methods:{
        // 点击跳转
        itemClick(){
            if(!this.active){
                this.$router.push(this.url)
            }   
        }
    }
}
</script>
<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      vertical-align: middle;
      margin-bottom: 2px;
  }
</style>