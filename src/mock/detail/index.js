var Mock = require('mockjs')

const Random = Mock.Random

Mock.mock('/detail/getGoodsDetail', 'post', {
    goods_price:Random.integer(1,100),
    goods_releave:Random.integer(0,100),
    goods_color:Random.integer(0,9),
    goods_name:Random.csentence(4,5)
})
