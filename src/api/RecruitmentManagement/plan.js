import request from '@/utils/request'

// 新增招聘计划
export function addPlan(data) {
    return request({
        url: '/system/zpjh',
        method:'post',
        data:data
    })
}

// 查询招聘计划
export function inquirePlan(params) {
    return request({
        url:'/system/zpjh/list',
        method:'get',
        params:params
    })
}

// 修改招聘计划
export function editPlan(data) {
    return request({
        url: '/system/zpjh',
        method:'put',
        data:data
    })
}

// 删除招聘计划
export function deletePlan(id) {
    return request({
        url:'system/zpjh/' + id,
        method:'delete'
    })
}