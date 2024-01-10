import request from '@/utils/request'

// 新增招聘计划
export function addModel(data) {
    return request({
        url: '/system/jxmbsd',
        method:'post',
        data:data
    })
}

// 查询招聘计划
export function inquireModel(params) {
    return request({
        url:'/system/jxmbsd/list',
        method:'get',
        params:params
    })
}

// 修改招聘计划
export function editModel(data) {
    return request({
        url: '/system/jxmbsd',
        method:'put',
        data
    })
}

// 删除招聘计划
export function deleteModel(id) {
    return request({
        url:'system/jxmbsd/' + id,
        method:'delete'
    })
}