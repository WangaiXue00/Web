import request from '@/utils/request'

// 新增培训计划
export function addCourse(data) {
    return request({
        url: '/system/course',
        method:'post',
        data:data
    })
}

// 查询培训计划
export function inquireCourse(params) {
    return request({
        url:'/system/course/list',
        method:'get',
        params:params
    })
}

// 修改培训计划
export function editCourse(data) {
    return request({
        url: '/system/course',
        method:'put',
        data
    })
}

// 删除培训计划 
export function deleteCourse(id) {
    return request({
        url:'system/course/' + id,
        method:'delete'
    })
}