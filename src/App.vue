<template>
<div class=''>
  <router-view />
  <van-tabbar v-model="active" @change='handleChange'>
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="search">搜索</van-tabbar-item>
    <van-tabbar-item icon="friends-o">购物车</van-tabbar-item>
    <van-tabbar-item icon="setting-o">我的</van-tabbar-item>
  </van-tabbar>
</div>
</template>

<script>
export default {
//组件状态
data() {
  return{
    active:0
  }
},
//方法集合
methods: {
  handleChange(res){
    if(res == 3){
      this.$router.push('/my')
    }else if(res == 2){
      this.$router.push('/cart')
    }else if(res == 0){
      this.$router.push('/')
    }else if(res == 1){
      this.$router.push('/search')
    }
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

</style>