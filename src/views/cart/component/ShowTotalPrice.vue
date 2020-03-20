<template>
    <div class='container'>
        <!-- <van-cell title="总价" :value="totalprice" size="large" :border='true' /> -->
        <van-swipe-cell>
            <van-cell :border="true" title="总价" :value="totalprice" />
            <template slot="right">
                <van-button square type="danger" text="删除" />
                <van-button square type="primary" text="结算" @click="pay"/>
            </template>
        </van-swipe-cell>
    </div>
</template>

<script>
export default {
//组件状态
data() {
    return{

    }
},
//方法集合
methods: {
    //去支付
    pay(res){
        this.$router.push('/pay')
    }
},
//组件注册
components: {},
//组件传值
props:['totalprice'],
//计算属性
computed: {},
//钩子函数
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>
    .container{
        position: fixed;
        bottom: 50px;
        left: 0px;
        width: 100%;
        border-top: 1px solid black;
    }
</style>