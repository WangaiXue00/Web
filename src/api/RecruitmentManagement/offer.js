import request from '@/utils/request'

// 查询offer列表
export function getOfferList(params) {
    return request({
        url: '/system/ofgl/list',
        method:'get',
        params:params
    })
}

// 修改offer信息
export function editOffer(data) {
    return request({
        url: '/system/ofgl',
        method:'put',
        data:data
    })
}