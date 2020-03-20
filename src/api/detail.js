import {request} from '../common/request'

export function getGoodsDetail(){
    return request('POST','/detail/getGoodsDetail')
}