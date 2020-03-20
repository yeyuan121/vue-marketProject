<template>
<div class=''>
    <Navbar 
    title="搜索"
    leftText='返回'
    @event1='callbacks'
    />
    <form action="/">
        <van-search
        v-model="value"
        show-action
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        />
    </form>
    <div class="record">搜索记录:</div>
    <div class="mytags">
        <tags-component 
        v-for="(value,key) in searchArr" 
        :key="key" 
        :tag='value' 
        @event='handleEvent'
        />
    </div>

</div>
</template>

<script>
import TagsComponent from './component/Tags'

import Navbar from '../../components/content/navbar/NavBar'

export default {
//组件状态
data() {
    return{
        value:'',
        searchArr:[],
    }
},
//方法集合
methods: {
    onSearch(res){
        this.searchArr.push( this.value )
    },
    onCancel(res){
        // console.log('cancel')
    },
    handleEvent(data){
        this.value = data
    },
    callbacks(data){
        this.$router.push('/')
    }
},
//组件注册
components: {TagsComponent,Navbar,},
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
    .mytags{
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .record{
        margin-top: 20px;
        text-indent: 10px;
        font-size: 14px;
    }
</style>