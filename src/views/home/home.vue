<template>
<div id="home">
    <nav-bar class="home-nav">
        <div slot="center">购物街</div>
    </nav-bar>
    <div v-if="result">
        <home-swiper :banners="result.banner.list"/>
        <home-recommend-view :recommends="result.recommend.list"/>
    </div>
    
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import {getHomeMultidata} from 'network/home'

export default {
    data(){
        return {
            result: null
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommendView
    },
    created(){
        getHomeMultidata().then(res=> {
            console.log(res);
            this.result = res.data
        })
    }
}
</script>

<style scoped>
.home-nav {
    background-color: var(--color-tint);
    color: #fff;
}
</style>