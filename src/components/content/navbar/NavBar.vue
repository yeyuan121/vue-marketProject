<template>
    <div class=''>
        <van-nav-bar
        :title="title" 
        :left-text="leftText" 
        :right-text="rightText" 
        left-arrow 
        @click-left="onClickLeft" 
        @click-right="onClickRight" 
        />
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
    onClickLeft(){
        this.$emit('event1')
    },
    onClickRight(){
        this.$emit('event2')
    }
},
//组件注册
components: {},
//组件传值
props:['title','leftText','rightText'],
//计算属性
computed: {},
//钩子函数
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>

</style>