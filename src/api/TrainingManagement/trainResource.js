import request from '@/utils/request'

// 新增培训计划
export function addResource(data) {
    return request({
        url: '/system/information',
        method:'post',
        data:data
    })
}

// 查询培训计划
export function inquireResource(params) {
    return request({
        url:'/system/information/list',
        method:'get',
        params:params
    })
}

// 修改培训计划
export function editResource(data) {
    return request({
        url: '/system/information',
        method:'put',
        data
    })
}

// 删除培训计划 
export function deleteResource(id) {
    return request({
        url:'system/information/' + id,
        method:'delete'
    })
}