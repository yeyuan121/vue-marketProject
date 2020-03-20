import Vue from 'vue'

export default {
    //没有购物车记录的商品加入购物车
    addOne(state,goods){
        state.shopingCar[goods.goods_id] = 
        { 
            num: goods.num,
            price:goods.price,
            name:goods.name,
            total_price:goods.num * goods.price,
            is_selected:false,//默认没选中
        }
    },
    //已经存在购物车里面的商品改变其数量和总价即可
    changeNum(state,goods){
        state.shopingCar[goods.goods_id].num += goods.num
        state.shopingCar[goods.goods_id].total_price = state.shopingCar[goods.goods_id].num * state.shopingCar[goods.goods_id].price
    },
    //根据商品id删除对应购物车记录
    deleteGoodsByGoodsId(state,id){
        Vue.delete(state.shopingCar,id)
    },
    //改变购物车中商品的选中状态
    changeCheckedStatus(state,paload){
        state.shopingCar[paload.goods_id].is_selected = paload.bool
    }
}