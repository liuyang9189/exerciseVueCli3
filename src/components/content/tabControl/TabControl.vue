<template>
  <div class="tab-control">
      <!-- <slot></slot> -->
      <div v-for="(item,index) in titles" class="tab-control-item" :class="{active: index === activeIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            activeIndex:0
        }
    },
    props:{
        titles:{
            type:Array,
            default:[]
        }
    },
    methods:{
        itemClick(index){
            this.activeIndex = index
        }
    },
    mounted(){

    }
}
</script>

<style scoped>
.tab-control {
    width: 100%;
    display: flex;
    text-align: center;
    background-color: #fff;
}
.tab-control-item {
    flex:1;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}
.tab-control-item span {
    padding: 5px;
}
.active {
    color: var(--color-high-text);
}
.active span {
    border-bottom: 3px solid var(--color-tint);
}
</style>