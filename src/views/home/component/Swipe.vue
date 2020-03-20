<template>
    <div class=''>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item,index) in swipeArr" :key='index'>
                <!-- <img :src="item.img" alt=""> -->{{item.text}}
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import {getSwipeImg} from '../../../api/home.js'

export default {
//组件状态
data() {
    return {
        swipeArr:[],
    }
},
//方法集合
methods: {},
//组件注册
components: {},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {
    getSwipeImg().then(res=>{
        this.swipeArr = res.data
    })
},
mounted() {}
}
</script>
<style lang='scss' scoped>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    img{
        width: 100%;
        height: 100%;
    }
  }
</style>