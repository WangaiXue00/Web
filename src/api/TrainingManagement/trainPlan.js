import request from '@/utils/request'

// 新增培训计划
export function addTrain(data) {
    return request({
        url: '/system/plan',
        method:'post',
        data:data
    })
}

// 查询培训计划
export function inquireTrain(params) {
    return request({
        url:'/system/plan/list',
        method:'get',
        params:params
    })
}

// 修改培训计划
export function editTrain(data) {
    return request({
        url: '/system/plan',
        method:'put',
        data
    })
}

// 删除培训计划 
export function deleteTrain(id) {
    return request({
        url:'system/plan/' + id,
        method:'delete'
    })
}