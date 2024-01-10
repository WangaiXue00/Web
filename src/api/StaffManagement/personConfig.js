import request from '@/utils/request'

// 新增人员配置信息
export function addPerConfig(data) {
  return request({
    url: '/system/rypzgl',
    method: 'post',
    data: data
  })
}

// 查询所有人员配置信息
export function inquireAllPerConfig(params) {
  return request({
    url: '/system/rypzgl/list',
    method: 'get',
    params: params
  })
}
// 查询单条人员配置信息
export function inquireOnlyPerConfig(ygh) {
  return request({
    url: '/system/rypzgl/' + ygh,
    method: 'get',
  })
}


// 修改人员配置信息
export function editPerConfig(data) {
  return request({
    url: '/system/rypzgl',
    method: 'put',
    data: data
  })
}

// 删除人员配置信息
export function deletePerConfig(ygh) {
  return request({
    url: '/system/rypzgl/' + ygh,
    method: 'delete'
  })
}