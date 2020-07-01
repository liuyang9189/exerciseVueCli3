<template>
  <tab-bar>
      <slot>
        <tab-bar-item path="/home" activeColor="deepPink">
          <img src="~assets/img/TabBar/n1.png" slot="item-icon"/>
          <img src="~assets/img/TabBar/n7.png" slot="item-icon-active"/>
          <div slot="item-text">我的</div>
        </tab-bar-item>
        <tab-bar-item path="/category" activeColor="deepPink">
          <img src="~assets/img/TabBar/n2.png" slot="item-icon"/>
          <img src="~assets/img/TabBar/n8.png" slot="item-icon-active"/>
          <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart" activeColor="deepPink">
          <img src="~assets/img/TabBar/n3.png" slot="item-icon"/>
          <img src="~assets/img/TabBar/n9.png" slot="item-icon-active"/>
          <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile" activeColor="deepPink">
          <img src="~assets/img/TabBar/n3.png" slot="item-icon"/>
          <img src="~assets/img/TabBar/n9.png" slot="item-icon-active"/>
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </slot>
    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'
export default {
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>