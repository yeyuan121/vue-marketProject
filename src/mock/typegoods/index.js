var Mock = require('mockjs')

const Random = Mock.Random

const arr = []

for(let i=0;i<10;i++){
    const obj = {}
    obj.name = Random.csentence(2,9)
    obj.price = Random.float(10,10000,0,2)
    obj.img = Random.image(Random.size, '#02adea', 'typeGoods')
    obj.desc = Random.csentence(5,15)
    obj.goods_id = Random.integer(1,100000)  
    arr.push(obj)  
}

Mock.mock('/typeGood/getGoodsByGoodsTypesId', 'post', arr)
