import request from '@/utils/request'

// 新增招聘计划
export function addTarget(data) {
    return request({
        url: '/system/grndjxmb',
        method:'post',
        data:data
    })
}

// 查询招聘计划
export function inquireTarget(params) {
    return request({
        url:'/system/grndjxmb/list',
        method:'get',
        params
    })
}

// 修改招聘计划
export function editTarget(data) {
    return request({
        url: '/system/grndjxmb',
        method:'put',
        data
    })
}

// 删除招聘计划
export function deleteTarget(id) {
    return request({
        url:'system/grndjxmb/' + id,
        method:'delete'
    })
}