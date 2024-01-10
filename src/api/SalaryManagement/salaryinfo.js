import request from '@/utils/request'

// 新增薪资信息
export function addSalaryInfo(data) {
  return request({
    url: '/system/xzxx',
    method: 'post',
    data: data
  })
}

// 新增基本薪资 
export function addBascSalary(data) {
  return request({
    url: '/system/jbxz',
    method: 'post',
    data: data
  })
}


// 查询薪资信息
export function inquireSalaryInfo(params) {
  return request({
    url: '/system/xzxx/list',
    method: 'get',
    params: params
  })
}

// 查询单一薪资信息
export function inquireOnlySalaryInfo(ygh) {
  return request({
    url: '/system/xzxx/'+ygh,
    method: 'get',
  })
}

// 查询基本薪资 
export function inquireBascSalary(params) {
  return request({
    url: '/system/jbxz/list',
    method: 'get',
    params: params
  })
}


// 修改薪资信息
export function editSalaryInfo(data) {
  return request({
    url: '/system/xzxx',
    method: 'put',
    data: data
  })
}

// 修改基本薪资 
export function editBascSalary(data) {
  return request({
    url: '/system/jbxz',
    method: 'put',
    data: data
  })
}

// 删除薪资信息
export function deleteSalaryInfo(ygh) {
  return request({
    url: '/system/xzxx/' + ygh,
    method: 'delete'
  })
}