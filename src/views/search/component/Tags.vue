<template>
    <div class='container'>
        <van-tag
        v-if="show.primary"
        closeable
        size="large"
        type="primary"
        @close="close('primary')" 
        @click="handleClick"
        >
        {{tag}}
        </van-tag>
    </div>
</template>

<script>
export default {
//组件状态
data() {
    return{
      show: {
        primary: true,
        success: true
      }
    }
},
//方法集合
methods: {
    close(type) {
      this.show[type] = false
    },
    handleClick(){
        this.$emit('event',this.tag)
    }
},
//组件注册
components: {},
//组件传值
props:['tag'],
//计算属性
computed: {},
//钩子函数
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>
    .container{
        // display: flex;
    }
</style>