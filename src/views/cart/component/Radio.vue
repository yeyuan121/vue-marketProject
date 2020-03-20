<template>
    <div class='container'>
        <div 
         class="myradio" 
        :class="{checked:isChecked}" 
        @click="handleClick" 
        >
        </div>
    </div>
</template>

<script>
export default {
//组件状态
data() {
    return{
        isChecked:this.$store.state.shopingCar[this.goodsid].is_selected
    }
},
//方法集合
methods: {
    handleClick(){
        this.isChecked = !this.isChecked
    },
    //计算购物车对象所有被选中商品的总价
    computeCheckedGoodsTotalPrice(){
        let total = 0
        const car = this.$store.state.shopingCar
        for(let x in car){
            if(car[x].is_selected === true){
                total += car[x].total_price
            }
        }
        return total
    }
},
//状态监视
watch:{
    isChecked(data1,data2){
        if(data1 === true){
            this.$store.commit('changeCheckedStatus',{
                goods_id:this.goodsid,
                bool:true,
            })
        }else{
            this.$store.commit('changeCheckedStatus',{
                goods_id:this.goodsid,
                bool:false,
            })
        }
        let total = this.computeCheckedGoodsTotalPrice()       
        this.$emit('event',total)    
    }
},
//组件注册
components: {},
//组件传值
props:['goodsid'],
//计算属性
computed: {},
//钩子函数
created() {},
mounted() {}
}
</script>
<style lang='scss' scoped>
    .container{
        flex-grow: 1;
        .myradio{
            height: 20px;
            width: 20px;
            border-radius: 50%;
            border: 1px solid black;
            background: white;
            // align-self: flex-start;
        }
        .checked{
            background: cornflowerblue;
        }
    }
</style>