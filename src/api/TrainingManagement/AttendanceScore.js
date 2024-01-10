import request from '@/utils/request'


export function addAttendance(data) {
    return request({
        url: '/system/user1',
        method:'post',
        data:data
    })
}


export function inquireAttendance(params) {
    return request({
        url:'/system/user1/list',
        method:'get',
        params:params
    })
}


export function editAttendance(data) {
    return request({
        url: '/system/user1',
        method:'put',
        data
    })
}


export function deleteAttendance(id) {
    return request({
        url:'system/user1/' + id,
        method:'delete'
    })
}