import request from '@/utils/request'

//新增候选人-基本信息、地址和联系方式
export function addHxrInfo(data) {
    return request({
        url:'/system/hxrInfo',
        method:'post',
        data:data
    })
}

//新增候选人-学历信息
export function addHxrStudy(data) {
    return request({
        url:'/system/studyInfo',
        method:'post',
        data:data
    })
}

//新增候选人-工作经历
export function addHxrWork(data) {
    return request({
        url:'/system/workInfo',
        method:'post',
        data:data
    })
}

//新增候选人-培训记录
export function addHxrTrain(data) {
    return request({
        url:'/system/trainInfo',
        method:'post',
        data:data
    })
}

//新增候选人-项目经验
export function addHxrProcess(data) {
    return request({
        url:'/system/processInfo', 
        method:'post',
        data:data
    })
}

//新增候选人-各种证书
export function addHxrZS(data) {
    return request({
        url:'/system/zhengshuInfo',
        method:'post',
        data:data
    })
}

// 查询候选人信息
export function getHxrList(params) {
    return request ({
        url:'/system/hxrInfo/list',
        method:'get',
        params:params
    })
}


// 删除候选人
export function deleteHxr(id) {
    return request({
        url:'/system/hxrInfo/' + id,
        method:'delete'
    })
}

// 删除学历信息
export function deleteHxrStudy(lsygh) {
    return request({
        url:'/system/studyInfo/' + lsygh,
        method:'delete'
    })
}

// 删除培训记录
export function deleteHxrTrain(lsygh) {
    return request({
        url:'/system/trainInfo/' + lsygh,
        method:'delete'
    })
}

// 删除工作经历
export function deleteHxrWork(lsygh) {
    return request({
        url:'/system/workInfo/' + lsygh,
        method:'delete'
    })
}

// 删除项目经验
export function deleteHxrProcess(lsygh) {
    return request({
        url:'/system/processInfo/' + lsygh, 
        method:'delete'
    })
}

// 删除证书信息
export function deleteHxrZS(lsygh) {
    return request({
        url:'/system/zhengshuInfo/' + lsygh,
        method:'delete'
    })
}


// 加入面试
export function addInterview(data) {
    return request({
        url:'/system/msjg',
        method:'post',
        data:data
    })
}

// 查询加入面试信息
export function searchInterview(params) {
    return request({
        url:'/system/msjg/list',
        method:'get',
        params:params
    })
}

// 加入人才库
export function addTalentPool(data) {
    return request({
        url:'/system/rck',
        method:'post',
        data:data
    })
}

// 查询是否在人才库中
export function getTalentPool(params) {
    return request({
        url:'/system/rck/list',
        method:'get',
        params:params
    })
}