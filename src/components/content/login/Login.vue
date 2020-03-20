<template>
    <div class=''>
        <Nav 
        :title="currentStatus==0?'登陆':'注册'" 
        leftText='返回' 
        @event1='callback'
        />
        <van-tabs @click="onClick">
            <van-tab title="登陆"></van-tab>
            <van-tab title="注册"></van-tab>
        </van-tabs>
        <van-form @submit="onSubmit">
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">
                提交
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { Toast } from 'vant'

import Nav from '../navbar/NavBar'

export default {
//组件状态
data() {
    return{
        username:'',
        password:'',
        currentStatus:0,
    }
},
//方法集合
methods: {
    onSubmit(){
        if(this.currentStatus == 1){
            Toast.success('注册成功')
        }else{
            const obj = {username:this.username,password:this.password,}
            window.localStorage.setItem('ShopUser',JSON.stringify(obj))
        }
    },
    onClick(res){
        this.currentStatus = res
    },
    callback(){
        this.$router.back()
    }
},
//组件注册
components: {Nav,},
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