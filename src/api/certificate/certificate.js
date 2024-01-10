import request from '@/utils/request'

// 新增证书
export function addCertificate(data) {
    return request({
        url: '/system/certificate',
        method:'post',
        data:data
    })
}

// 查询所有证书信息
export function getCertificate(params) {
    return request({
        url:'/system/certificate/list',
        method:'get',
        params:params
    })
}

// 修改证书信息
export function editCertificate(data) {
    return request({
        url: '/system/certificate',
        method:'put',
        data:data
    })
}

// 删除证书信息
export function deletCertificate(id) {
    return request({
        url: '/system/certificate/' + id,
        method:'delete'
    })
}