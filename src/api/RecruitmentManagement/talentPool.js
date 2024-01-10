import request from '@/utils/request' 

// 获取人才库列表
export function getTalentPool(params) {
    return request({
        url:'/system/rck/list',
        method:'get',
        params:params
    })
}

// 删除人才库信息
export function deleteTalentPool(id) {
    return request({
        url:'/system/rck/' + id,
        method:'delete'
    })
}

// 查询招聘计划
export function inquirePlan(params) {
    return request({
        url:'/system/zpsh/list',
        method:'get',
        params:params
    })
}