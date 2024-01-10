import request from '@/utils/request'

export function inquireYhxx(params) {
    return request({
        url:'/system/yhxx/list',
        method:'get',
        params:params
    })
}