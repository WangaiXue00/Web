import request from '@/utils/request'

// 新增劳动合同申请信息
export function addLaborContract(data) {
  return request({
    url: '/system/ldhtqdsq',
    method: 'post',
    data: data
  })
}

// 查询所有劳动合同申请信息
export function inquireLaborContract(params) {
  return request({
    url: '/system/ldhtqdsq/list',
    method: 'get',
    params: params
  })
}
// 查询单条劳动合同申请信息
export function inquireOnlyLaborContract(ygh) {
  return request({
    url: '/system/ldhtqdsq/' + ygh,
    method: 'get',
  })
}


// 修改劳动合同申请信息
// export function editLaborContract(data) {
//   return request({
//     url: '/system/ldhtqdsq',
//     method: 'put',
//     data: data
//   })
// }

// 删除劳动合同申请信息
export function deleteLaborContract(ygh) {
  return request({
    url: '/system/ldhtqdsq/' + ygh,
    method: 'delete'
  })
}