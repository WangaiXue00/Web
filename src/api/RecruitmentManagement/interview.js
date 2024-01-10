import request from '@/utils/request'

// 查询面试信息
export function searchInterview(params) {
    return request({
        url:'/system/msjg/list',
        method:'get',
        params:params
    })
}

// 查询安排面试列表
export function getSchedule(params) {
    return request({
        url:'/system/apms/list',
        method:'get',
        params:params
    })
}

// 新增安排面试
export function addSchedule(data) {
    return request({
        url:'/system/apms',
        method:'post',
        data:data
    })
}

// 修改面试结果
export function editSchedule(data) {
    return request({
        url:'/system/apms',
        method:'put',
        data:data
    })
}

// 查询面试结果
// export function searchResult(params) {
//     return request({
//         url:'/system/xgmsjg/list',
//         method:'get',
//         params:params
//     })
// }

// 新增面试结果
// export function addResult(data) {
//     return request({
//         url:'/system/xgmsjg',
//         method:'post',
//         data:data
//     })
// }


