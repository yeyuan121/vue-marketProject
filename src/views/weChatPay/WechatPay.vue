<template>
    <div class=''>
        <Navbar 
        title="微信支付"
        leftText='返回'
        @event1='callback'
        />
        <!-- 密码输入框 -->
        <van-password-input
        :value="value"
        info="密码为 6 位数字"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
        />
        <!-- 数字键盘 -->
        <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
        />
    </div>
</template>

<script>
import Navbar from '../../components/content/navbar/NavBar'

import { Toast } from 'vant'

export default {
//组件状态
data() {
    return{
      value: '',
      showKeyboard: true
    }
},
//方法集合
methods: {
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    callback(data){
        this.$router.back()
    }
},
//属性侦听
watch:{
  value(v){
    if(v.length == 6){
      if(v == '123456'){
        Toast.success('支付成功')
      }else{
        Toast.fail('密码错误')
      }
    }
  }
},
//组件注册
components: {Navbar,},
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