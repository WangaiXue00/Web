import request from '@/utils/request'

// 新增招聘计划
export function addKhwd(data) {
    return request({
        url: '/system/khwd',
        method:'post',
        data:data
    })
}

// 查询招聘计划
export function inquireKhwd(params) {
    return request({
        url:'/system/khwd/list',
        method:'get',
        params:params
    })
}

// 修改招聘计划
export function editKhwd(data) {
    return request({
        url: '/system/khwd',
        method:'put',
        data
    })
}

// 删除招聘计划
export function deleteKhwd(id) {
    return request({
        url:'system/khwd/' + id,
        method:'delete'
    })
}