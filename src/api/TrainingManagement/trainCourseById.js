import request from '@/utils/request'


// 通过id查询
export function inquireCourseById(params) {
    return request({
        url:'/system/course1/list',
        method:'get',
        params:params
    })
}
