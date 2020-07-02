<template>
<div id="home">
    <nav-bar class="home-nav">
        <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content">
        <home-swiper :banners="banners"/>
        <home-recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control :titles="titles" class="tab-control"/>
        <ul>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
            <li>12312312</li>
        </ul>
    </scroll>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from './childComps/FeatureView'
import {getHomeMultidata,getHomeGoods} from 'network/home'

export default {
    data(){
        return {
            banners:[],
            recommends:[],
            titles:['流行','新款','精选'],
            goods:{
                'pop':{page:0,list:[]},
                'news':{page:0,list:[]},
                'sell':{page:0,list:[]}
            }
        }
    },
    components:{
        NavBar,
        HomeSwiper,
        HomeRecommendView,
        FeatureView,
        TabControl,
        Scroll
    },
    created(){
        this.getHomeMultidata()
        this.getHomeGoods()
        
    },
    methods:{
        getHomeMultidata(){
            getHomeMultidata().then(res=> {
                console.log(res);
                this.banners = res.data.banner.list
                this.recommends = res.data.recommend.list
            })
        },
        getHomeGoods(){
            getHomeGoods('pop',1).then(res => {
                console.log(res);
                
            })
        }
    }
}
</script>

<style scoped>
#home {
    padding-top: 44px;
    height: 100vh;
}
.home-nav {
    width: 100%;
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    top:0;
    left:0;
    z-index: 9;
}
.tab-control {
    position: sticky;
    top: 44px;
}
.content {
    height: calc(100vh - 93px);
    overflow: hidden;
}
</style>