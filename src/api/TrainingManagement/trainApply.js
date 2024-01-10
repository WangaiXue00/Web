import request from '@/utils/request'


export function addApply(data) {
    return request({
        url: '/system/approve',
        method:'post',
        data:data
    })
}


export function inquireApply(params) {
    return request({
        url:'/system/approve/list',
        method:'get',
        params:params
    })
}


export function editApply(data) {
    return request({
        url: '/system/approve',
        method:'put',
        data
    })
}


export function deleteApply(id) {
    return request({
        url:'system/approve/' + id,
        method:'delete'
    })
}