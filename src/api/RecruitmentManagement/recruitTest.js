import request from "@/utils/request"

// 查询题库信息
export function getQuestion(params) {
    return request({
        url: '/system/yptkgl/list',
        method: "get",
        params:params
    })
}

// 查询测试信息
export function getRecruitTest(params) {
    return request({
        url:'/system/ypcs/list',
        method:'get',
        params:params
    })
}

// 新增测试
export function addRecruitTest(data) {
    return request({
        url:'/system/ypcs',
        method:'post',
        data:data
    })
}

// 修改测试
export function editRecruitTest(data) {
    return request({
        url:'/system/ypcs',
        method:'put',
        data:data
    })
}

// 删除测试
export function deleteRecruitTest(id) {
    return request({
        url:'/system/ypcs/' + id,
        method:'delete'
    })
}