<template>
    <div class='' v-if='shopingCar'>
        <NavBar 
        title="购物车" 
        leftText='返回' 
        @event1='callback' 
        />
        <van-panel 
        :title="item.name" 
        desc="描述信息" 
        :status="String(item.num)" 
        v-for="(item,key) in shopingCar" :key='key' 
        >
            <!-- <div>内容</div> -->
            <div slot="footer">
                <MyRadio :goodsid='key' @event='computeTotalPrice' />
                <van-button size="small" @click="toDetail( key )">详情</van-button>
                <van-button size="small" type="danger" @click="deleteGoods( key )">删除</van-button>
            </div>
        </van-panel>
        <ShowPrice 
        :totalprice="totalPrice" 
        v-show="totalPrice" 
        />
    </div>
</template>

<script>
import { Toast } from 'vant'

import MyRadio from './component/Radio'
import ShowPrice from './component/ShowTotalPrice'

import NavBar from '../../components/content/navbar/NavBar'

export default {
//组件状态
data() {
    return{
        shopingCar:false,
        checked: true,
        totalPrice:0,
    }
},
//方法集合
methods: {
    //获取store里面的购物车对象
    getShopingCarObject(){
        const obj = this.$store.state.shopingCar
        if(JSON.stringify(obj) == '{}'){//购物车对象为空
            this.shopingCar = null
        }else{
            this.shopingCar = obj
        }
    },
    deleteGoods(id){
        this.$store.commit('deleteGoodsByGoodsId',id)
        this.totalPrice = this.computeCheckedGoodsTotalPrice()
        Toast.success('删除成功')
    },
    toDetail(id){
        this.$router.push(`/detail/${id}`)
    },
    computeTotalPrice(data){
        this.totalPrice = data
    },
    //计算购物车对象所有被选中商品的总价
    computeCheckedGoodsTotalPrice(){
        let total = 0
        const car = this.$store.state.shopingCar
        for(let x in car){
            if(car[x].is_selected === true){
                total += car[x].total_price
            }
        }
        return total
    },
    //传递给navbar子组件的event这个事件的监听的注册函数
    callback(data){
        this.$router.push('/')
    }
},
//组件注册
components: {MyRadio,ShowPrice,NavBar,},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {
    this.getShopingCarObject()
    this.totalPrice = this.computeCheckedGoodsTotalPrice()
},
mounted() {
    
}
}
</script>
<style lang='scss' scoped>
    .van-panel__footer>div{
        display: flex;
        justify-content: flex-end;
    }
</style>