import axios from 'axios'

export function request(method,url,data = {}){
    if(method == 'POST'){
        return axios({
            method,
            url,
            data,
        })
    }else{
        return axios.get(url)
    }
}