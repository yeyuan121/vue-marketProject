<template>
    <div class=''>
        <Navbar
        left-text='返回'
        title="商品分类"
        @event1='callback'
        />
        <van-card
        :price="value.price"
        :desc="value.desc"
        :title="value.name"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        v-for="(value,key) in goodsArr"
        :key="key"
        @click="handleClick(value.goods_id)"
        />
    </div>
</template>

<script>
import {getGoodsByGoodsTypesId,} from '../../api/typeGoods'

import { Toast } from 'vant'

import Navbar from '../../components/content/navbar/NavBar'

export default {
//组件状态
data() {
    return{
        goodsArr:[],
    }
},
//方法集合
methods: {
    //获取初始化数据
    getGoodsArr(){
        getGoodsByGoodsTypesId().then(res => {
            this.goodsArr = res.data
        }).catch(() => {
            Toast.fail('请求失败')
        })
    },
    callback(data){
        this.$router.back()
    },
    //点击商品 前端路由跳转到详情页
    handleClick(id){
        this.$router.push(`/detail/${id}`)
    }
},
//组件注册
components: {Navbar,},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {
    this.getGoodsArr()
},
mounted() {}
}
</script>
<style lang='scss' scoped>

</style>