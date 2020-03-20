var Mock = require('mockjs')

const Random = Mock.Random

const swipeArr = []

const goodsArr = []

const typesArr = []

for (let index = 0; index < 3; index++) {
    const obj = {}
    obj.text = Random.string(2,5)
    obj.img = Random.image(Random.size, '#02adea', 'Hello')
    swipeArr.push(obj)
}

for (let index = 0; index < 10; index++) {
    const obj = {}
    obj.name = Random.csentence(2,9)
    obj.price = Random.float(10,10000,0,2)
    obj.img = Random.image(Random.size, '#02adea', 'Hello')
    obj.desc = Random.csentence(5,15)
    obj.goods_id = Random.integer(1,100000)
    goodsArr.push(obj)
}

for(let i = 0;i < 6;i++){
    const obj = {}
    obj.name = Random.csentence(2)
    obj.typeid = Random.integer(2,9)
    typesArr.push(obj)
}

Mock.mock('/home/getSwipeImgObjArr', 'post', swipeArr)
Mock.mock('/home/getGoodsObjArr', 'post', goodsArr)
Mock.mock('/home/getGoodsTypes', 'post', typesArr)


