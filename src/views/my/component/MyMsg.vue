<template>
    <div class='container'>
        <img :src="img" alt="">
        <div>{{name}}</div>
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
methods: {},
//组件注册
components: {},
//组件传值
props:['img','name'],
//计算属性
computed: {},
//钩子函数
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>
    .container{
        margin-top: 30px;
        margin-bottom: 30px;
        display: flex;
        height: 100px;
        // width: 100%;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        img{
            height: 50px;
            width: 50px;
            border-radius: 50%;
        }
        div{
            flex-grow: 1;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            text-indent: 30px;
        }
    }
</style>