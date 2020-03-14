<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>    
        </div>
        <div class="center">
            <slot name="center"></slot>    
        </div>
        <div class="right">
            <slot name="right"></slot>    
        </div>
    </div>
</template>
<script>
export default {
    name: 'nav-bar'
}
</script>
<style scoped>
    .nav-bar{
        height: 44px;
        display: flex;
        text-align: center;
        box-shadow: 0 1px 1px rgba(100,100,100,.1);
        line-height: 44px;
    }
    .left,.right{
        width: 60px;
    }
    .center{
        flex:1;
    }
</style>