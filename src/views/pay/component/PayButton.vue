<template>
    <div class='conatainer'>
        <van-button round type="primary" @click="weChatPay">微信支付</van-button>
        <van-button round type="info">支付宝支付</van-button>
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
    weChatPay(){
        this.$router.push('/pay/weChatPayPage')
    }
},
//组件注册
components: {},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>
    .conatainer{
        display: flex;
        position: fixed;
        justify-content: space-around;
        bottom: 50px;
        width: 100%;
        button{
            width: 102px;
        }
    }
</style>