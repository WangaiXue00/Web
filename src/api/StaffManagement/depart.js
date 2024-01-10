import request from '@/utils/request'

// 新增离职申请信息
export function addDepartApp(data) {
  return request({
    url: '/system/lzsq',
    method: 'post',
    data: data
  })
}

// 查询所有离职申请信息
export function inquireDepartApp(params) {
  return request({
    url: '/system/lzsq/list',
    method: 'get',
    params: params
  })
}
// 查询单条离职申请信息
export function inquireOnlyDepartApp(ygh) {
  return request({
    url: '/system/lzsq/' + ygh,
    method: 'get',
  })
}


// 修改离职申请信息
export function editDepartApp(data) {
  return request({
    url: '/system/lzsq',
    method: 'put',
    data: data
  })
}

// 删除离职申请信息
export function deleteDepartApp(ygh) {
  return request({
    url: '/system/lzsq/' + ygh,
    method: 'delete'
  })
}