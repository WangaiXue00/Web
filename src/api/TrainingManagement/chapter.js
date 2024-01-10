import request from '@/utils/request'

// 新增培训计划
export function addChapter(data) {
    return request({
        url: '/system/chapter',
        method:'post',
        data:data
    })
}

// 查询培训计划
export function inquireChapter(params) {
    return request({
        url:'/system/chapter/list',
        method:'get',
        params:params
    })
}

// 修改培训计划
export function editChapter(data) {
    return request({
        url: '/system/chapter',
        method:'put',
        data
    })
}

// 删除培训计划 
export function deleteChapter(id) {
    return request({
        url:'system/chapter/' + id,
        method:'delete'
    })
}