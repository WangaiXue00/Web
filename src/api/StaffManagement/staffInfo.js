import request from '@/utils/request'

//新增员工基本信息
export function addStaffInfo(data) {
  return request({
    url: '/system/ygxx',
    method: 'post',
    data: data
  })
}


//新增学历
export function addStaffEdu(data) {
  return request({
    url: '/system/xljl',
    method: 'post',
    data: data
  })
}

//新增过往培训
export function addStaffTrain(data) {
  return request({
    url: '/system/gwpx',
    method: 'post',
    data: data
  })
}

//新增工作经历
export function addStaffWork(data) {
  return request({
    url: '/system/gzjl',
    method: 'post',
    data: data
  })
}

//新增家庭信息
export function addStaffFam(data) {
  return request({
    url: '/system/jtxx',
    method: 'post',
    data: data
  })
}

//新增人才盘点
export function addStaffTal(data) {
  return request({
    url: '/system/rcpd',
    method: 'post',
    data: data
  })
}

// 查询所有基本信息
export function getStaffList(params) {
  return request({
    url: '/system/ygxx/list',
    method: 'get',
    params: params
  })
}

// 查询单条基本信息
export function getStaList(gh) {
  return request({
    url: '/system/ygxx/' + gh,
    method: 'get',
  })
}


// 查询学历信息
export function getStaffEdu(gh) {
  return request({
    url: '/system/xljl/list',
    method: 'get',
    params: { gh: gh }
  })
}
// 查询过往培训
export function getStaffTrain(gh) {
  return request({
    url: '/system/gwpx/list',
    method: 'get',
    params: { gh: gh }
  })
}
// 查询工作经历
export function getStaffWork(gh) {
  return request({
    url: '/system/gzjl/list',
    method: 'get',
    params: { gh: gh }
  })
}
// 查询家庭关系
export function getStaffFam(gh) {
  return request({
    url: '/system/jtxx/list',
    method: 'get',
    params: { gh: gh }
  })
}
// 查询人才信息
export function getStaffTal(gh) {
  return request({
    url: '/system/rcpd/list',
    method: 'get',
    params: { gh: gh }
  })
}

//修改基本信息
export function editStaffList(data) {
  return request({
    url: '/system/ygxx',
    method: 'put',
    data: data
  })
}
//修改学历经历
export function editStaffEdu(data) {
  return request({
    url: '/system/xljl',
    method: 'put',
    data: data
  })
}
//修改过往培训
export function editStaffTra(data) {
  return request({
    url: '/system/gwpx',
    method: 'put',
    data: data
  })
}

//修改工作经历
export function editStaffWork(data) {
  return request({
    url: '/system/gzjl',
    method: 'put',
    data: data
  })
}

//修改家庭信息
export function editStaffFam(data) {
  return request({
    url: '/system/jtxx',
    method: 'put',
    data: data
  })
}

//修改人才盘点
export function editStaffTal(data) {
  return request({
    url: '/system/rcpd',
    method: 'put',
    data: data
  })
}


// 删除基本信息
export function deleteStaff(gh) {
  return request({
    url: '/system/ygxx/' + gh,
    method: 'delete'
  })
}

// 删除学历信息
export function deleteStaffEdu(id) {
  return request({
    url: '/system/xljl/' + id,
    method: 'delete'
  })
}

// 删除过往培训
export function deleteStaffTrain(id) {
  return request({
    url: '/system/gwpx/' + id,
    method: 'delete'
  })
}

// 删除工作经历
export function deleteStaffWork(id) {
  return request({
    url: '/system/gzjl/' + id,
    method: 'delete'
  })
}

// 删除家庭关系
export function deleteStaffFam(id) {
  return request({
    url: '/system/jtxx/' + id,
    method: 'delete'
  })
}

// 删除人才信息
export function deleteStaffTal(id) {
  return request({
    url: '/system/rcpd/' + id,
    method: 'delete'
  })
}