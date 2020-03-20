<template>
    <div class=''>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <div class="mycell">
            <van-cell-group>
                <van-cell title="商品价格" :value="goods.goods_price" v-if='goods!==null' />
                <van-cell title="商品剩余" :value="goods.goods_releave" v-if='goods!==null' />
                <van-cell title="单元格" value="内容" />
                <van-cell title="单元格" value="内容" />
                <van-cell title="单元格" value="内容" />
            </van-cell-group>
        </div>
        <div class="mystep">
            <van-stepper v-model="value" @change='handleChange'/>
            <div>数量：{{value}}</div>
        </div>
        <div class="operate">
            <van-button round type="info" @click="addToCar">加入购物车</van-button>
            <van-button round type="info">立即购买</van-button>
        </div>
    </div>
</template>

<script>
import {getGoodsDetail} from '../../api/detail'

import { Toast } from 'vant'

export default {
//组件状态
data() {
    return{
        goods:null,
        value:1,
    }
},
//方法集合
methods: {
    handleChange(res){
        this.value = res
    },
    addToCar(){
        let res = this.goodsInShopingCar(this.goods.goods_id)
        if(res){//已经在购物车内
            this.$store.commit('changeNum',{goods_id:this.goods.goods_id,num:this.value})
        }else{//在购物没有记录
            this.$store.commit('addOne',{
                goods_id:this.goods.goods_id,
                num:this.value,
                price:this.goods.goods_price,
                name:this.goods.goods_name,
                }
            )
        }
        Toast.success('加入购物车成功')
    },
    //该商品是否加入过购物车
    goodsInShopingCar(goods_id){
        if(goods_id in this.$store.state.shopingCar){
            return true
        }else{
            return false
        }
    },
},
//组件注册
components: {},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {
    getGoodsDetail().then(res => {
        res.data.goods_id = this.$route.params.goodsid
        this.goods = res.data
    }).catch(err => {
        console.log(err)
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
        height: 300px !important;
    }
    .mycell{
        // margin-top: 40px;
    }
    .operate{
        margin-top: 10px;
        display: flex;
        justify-content: space-around;
    }
    .van-button{
        width: 112px !important;
    }
    .mystep{
        display: flex;
        height: 50px;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
    }
</style>