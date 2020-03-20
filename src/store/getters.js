export default {
    //计算被选中的商品总价
    computeCheckedGoodsTotalPrice : state => {
        let total = 0
        const car = state.shopingCar
        for(let x in car){
            if(car[x].is_selected == true){
                total += car[x].total_price
            }
        }
        return total
    }
}