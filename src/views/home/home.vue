<template>
    <div>
        <navBar class="home-nav">
            <div slot="center">购物街</div>
        </navBar>
    </div>
</template>
<script>
import {request} from 'network/request'

import navBar from 'components/common/navBar/NavBar'
export default {
    name:'home',
    components:{
        navBar
    },
    mounted(){
        request({
            url : '/swiper',
        }).then(res => {
            console.log('succ',res)
        }).catch(err => {
            console.log('err',err)
        })
    }
}
</script>

<style scoped>
    .home-nav{
        background-color: var(--color-high-text);
        color: #fff;
    }
</style>