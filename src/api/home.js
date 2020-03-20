import {request} from '../common/request'

export function getSwipeImg(){
    return request('POST','/home/getSwipeImgObjArr')
}

export function getGoods(){
    return request('POST','/home/getGoodsObjArr')
}

export function getTypes(){
    return request('POST','/home/getGoodsTypes')
}