import request from '@/utils/request'

// 查询所有题目
export function getQuestion(params) {
    return request({
        url: '/system/yptkgl/list',
        method: "get",
        params:params
    })
}

// 新增题目
export function addQuestion(data) {
    return request({
        url: "/system/yptkgl",
        method:'post',
        data:data
    })
}

// 修改题目
export function editQuestion(data) {
    return request({
        url:'/system/yptkgl',
        method:'put',
        data:data
    })
}

// 删除题目
export function deleteQuestion(id) {
    return request({
        url:'/system/yptkgl/' + id,
        method:'delete'
    })
}