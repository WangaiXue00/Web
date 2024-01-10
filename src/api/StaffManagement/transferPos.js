import request from '@/utils/request'

// 新增离职申请信息
export function addTransPosApp(data) {
  return request({
    url: '/system/zgsq',
    method: 'post',
    data: data
  })
}

// 查询所有离职申请信息
export function inquireTransPosApp(params) {
  return request({
    url: '/system/zgsq/list',
    method: 'get',
    params: params
  })
}
// 查询单条离职申请信息
export function inquireOnlyTransPosApp(ygh) {
  return request({
    url: '/system/zgsq/' + ygh,
    method: 'get',
  })
}


// 修改离职申请信息
export function editTransPosApp(data) {
  return request({
    url: '/system/zgsq',
    method: 'put',
    data: data
  })
}

// 删除离职申请信息
export function deleteTransPosApp(ygh) {
  return request({
    url: '/system/zgsq/' + ygh,
    method: 'delete'
  })
}