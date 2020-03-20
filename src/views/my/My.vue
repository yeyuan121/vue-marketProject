<template>
    <div class='container'>
        <mymsg 
        v-if="$route.path == '/my' && userMsg !== null" 
        :name='userMsg.username' 
        img='https://b.yzcdn.cn/vant/icon-demo-1126.png' 
        />
        <van-divider v-if="$route.path == '/my'" />
        <router-view />
        <van-cell title="登陆" is-link to="/my/login" v-if="$route.path == '/my'" />
    </div>
</template>

<script>
import { Dialog } from 'vant'

import mymsg from './component/MyMsg.vue'

export default {
//组件状态
data() {
    return{
        userMsg:null,
    }
},
//方法集合
methods: {
    //去本地存储里面查找用户登陆信息
    findLoginData(){
        const obj = window.localStorage.getItem('ShopUser')
        if(!obj){
            return false
        }
        return obj
    }
},
//组件注册
components: {mymsg},
//组件传值
props:[],
//计算属性
computed: {},
//钩子函数
created() {
    const result = this.findLoginData()
    if(!this.findLoginData()){
        Dialog.confirm({
            title: '提示',
            message: '您还未登陆,是否去登陆？'
        }).then(() => {
            this.$router.push('/my/login')
        }).catch(() => {
            this.$router.push('/my')
        })
    }else{
        this.userMsg = JSON.parse(result)
    }
},
mounted() {}
}
</script>
<style lang='scss' scoped>

</style>