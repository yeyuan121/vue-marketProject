import {request} from '../common/request'

export function getGoodsByGoodsTypesId(){
    return request('POST','/home/getGoodsObjArr')
}
