<template>
    <van-grid-item
      icon="photo-o"
      :text="text"
      @click="handleClick"
    />
</template>

<script>
export default {
//组件状态
data() {
    return {
        
    }
},
//方法集合
methods: {
  handleClick(){
    this.$router.push(`/typeGoods/${this.typeid}`)
  }
},
//组件注册
components: {},
//组件传值
props:['text','typeid'],
//计算属性
computed: {},
//钩子函数
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>

</style>