import request from '@/utils/request'

// 新增培训计划
export function addExam1(data) {
    return request({
        url: '/system/exam1',
        method:'post',
        data:data
    })
}

// 查询培训计划
export function inquireExam1(params) {
    return request({
        url:'/system/exam1/list',
        method:'get',
        params:params
    })
}

// 修改培训计划
export function editExam1(data) {
    return request({
        url: '/system/exam1',
        method:'put',
        data
    })
}

// 删除培训计划 
export function deleteExam1(id) {
    return request({
        url:'system/exam1/' + id,
        method:'delete'
    })
}