import request from '@/utils/request'

// 新增培训计划
export function addExam(data) {
    return request({
        url: '/system/info1',
        method:'post',
        data:data
    })
}

// 查询培训计划
export function inquireExam(params) {
    return request({
        url:'/system/info1/list',
        method:'get',
        params:params
    })
}

// 修改培训计划
export function editExam(data) {
    return request({
        url: '/system/info1',
        method:'put',
        data
    })
}

// 删除培训计划 
export function deleteExam(id) {
    return request({
        url:'system/info1/' + id,
        method:'delete'
    })
}