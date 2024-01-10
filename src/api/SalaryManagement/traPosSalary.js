import request from '@/utils/request'

// 新增调岗调薪
export function addPosSal(data) {
  return request({
    url: '/system/tgtxsq',
    method: 'post',
    data: data
  })
}

// 查询调岗调薪
export function inquirePosSal(params) {
  return request({
    url: '/system/tgtxsq/list',
    method: 'get',
    params: params
  })
}

// 修改薪资信息
// export function editSalary(data) {
//   return request({
//     url: '/system/zwgl',
//     method: 'put',
//     data: data
//   })
// }

// 删除薪资信息
// export function deleteSalary(id) {
//   return request({
//     url: '/system/zwgl/' + id,
//     method: 'delete'
//   })
// }