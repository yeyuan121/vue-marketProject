<template>
<div class=''>
  <swipe />
  <van-grid :column-num="3">
    <grid 
    v-for="(value,key) in typeArr"
    :key="key"
    :text='value.name'
    :typeid='value.typeid'
    />
  </van-grid>
  <van-card
    v-for="(item,index) in getGoods" 
    :key="index"
    :price="item.price"
    :desc="item.desc"
    :title="item.name"
    :thumb="item.img" 
    @click="toDetail(item.goods_id)"
  />
</div>
</template>

<script>
import swipe from './component/Swipe'
import grid from './component/Grid'

import {getSwipeImg,getGoods,getTypes} from '../../api/home.js'

export default {
//组件状态
data() {
  return {
    getGoods:[],
    typeArr:[],
  }
},
//方法集合
methods: {
  toDetail(id){
    this.$router.push(`/detail/${id}`)
  }
},
//组件注册
components: {swipe,grid,},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {
  getGoods().then(res=>{
    this.getGoods = res.data
    return getTypes()
  }).then(res => {
    this.typeArr = res.data
  })
},
mounted() {}
}
</script>
<style lang='scss' scoped>

</style>
