<template>
    <div class=''>
        <div v-if="$route.path == '/pay'">
            <Nav 
            title="支付页面"
            leftText='返回'
            @event1='callback'
            />
            <van-card
            :num="value.num"
            :price="value.price"
            desc="描述信息"
            :title="value.name"
            thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
            v-for="(value,key,index) in payGoodsArr" 
            :key='index' 
            />
            <PayButton />
        </div>
        <router-view />
    </div>
</template>

<script>
import PayButton from './component/PayButton'
import Nav from '../../components/content/navbar/NavBar'

export default {
//组件状态
data() {
    return {
        payGoodsArr:[]
    }
},
//方法集合
methods: {
    //获取store中已被勾选的商品们
    getSelectedGoods(){
        const obj = this.$store.state.shopingCar
        const arr = []
        for(let x in obj){
            if(obj[x].is_selected === true){
                arr.push(obj[x])
            }
        }
        this.payGoodsArr = arr
    },
    callback(){
        this.$router.back()
    }
},
//组件注册
components: {PayButton,Nav,},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {
    this.getSelectedGoods()
},
mounted() {}
}
</script>
<style lang='scss' scoped>

</style>