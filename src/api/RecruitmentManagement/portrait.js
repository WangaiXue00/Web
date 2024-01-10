import request from '@/utils/request'

// 查询候选人信息
export function getHXRInfo(params) {
    return request ({
        url:'/system/hxrInfo/list',
        method:'get',
        params:params
    })
}

// 查询学历信息
export function getStudyInfo(params) {
    return request ({
        url:'/system/studyInfo/list',
        method:'get',
        params:params
    })
}

// 查询面试安排次数
export function getInterviewCount(lsygh) {
    return request ({
        url:'/system/msjg/' + lsygh,
        method:'get'
    })
}

// 查询面试信息
export function getInterviewInfo(params) {
    return request ({
        url:'/system/apms/list',
        method:'get',
        params:params
    })
}

// 查询培训记录
export function getTrainInfo(params) {
    return request ({
        url:'/system/trainInfo/list',
        method:'get',
        params:params
    })
}

// 查询工作经历
export function getWorkInfo(params) {
    return request ({
        url:'/system/workInfo/list',
        method:'get',
        params:params
    })
}

// 查询项目经验
export function getProcessInfo(params) {
    return request ({
        url:'/system/processInfo/list',
        method:'get',
        params:params
    })
}

// 查询证书信息
export function getZSInfo(params) {
    return request ({
        url:'/system/zhengshuInfo/list',
        method:'get',
        params:params
    })
}