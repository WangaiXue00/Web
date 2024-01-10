import request from '@/utils/request'

// 新增职位基本信息
export function addPosInfo(data) {
  return request({
    url: '/system/zwgl',
    method: 'post',
    data: data
  })
}

//新增工作职责
export function addWorkDuty(data) {
  return request({
    url: '/system/gzzz',
    method: 'post',
    data: data
  })
}

// 查询所有职位信息
export function getAllPosList(params) {
  return request({
    url: '/system/zwgl/list',
    method: 'get',
    params: params
  })
}

// 查询单条基本信息
export function getOnlyPosList(bh) {
  return request({
    url: '/system/zwgl/' + bh,
    method: 'get',
  })
}

// 查询工作职责
export function getWorkDuty(bh) {
  return request({
    url: '/system/gzzz/list',
    method: 'get',
    params: { bh: bh }
  })
}

// 修改基本信息
export function editPosInfo(data) {
  return request({
    url: '/system/zwgl',
    method: 'put',
    data: data
  })
}

//修改工作职责
export function editWorkDuty(data) {
  return request({
    url: '/system/gzzz',
    method: 'put',
    data: data
  })
}


// 删除职位基本信息
export function deleteInfo(bh) {
  return request({
    url: '/system/zwgl/' + bh,
    method: 'delete'
  })
}
// 删除工作职责
export function deleteWorkDuty(id) {
  return request({
    url: '/system/gzzz/' + id,
    method: 'delete'
  })
}
