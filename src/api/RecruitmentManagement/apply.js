import request from '@/utils/request'

// 新增招聘申请
export function addApply(data) {
    return request({
        url:'/system/zpsq',
        method:'post',
        data:data
    })
}

// 查询招聘申请
export function searchApply(params) {
    return request({
        url:'/system/zpsq/list',
        method:'get',
        params:params
    })
}

// 修改招聘申请
export function editApply(data) {
    return request({
        url:'/system/zpsq',
        method:'put',
        data:data
    })
}

// 删除招聘申请
export function deleteApply(id) {
    return request({
        url:'/system/zpsq/' + id,
        method:'delete',
    })
}

// 查询招聘审核
export function searchExamine(params) {
    return request({
        url:'/system/zpsh/list',
        method:'get',
        params:params
    })
}