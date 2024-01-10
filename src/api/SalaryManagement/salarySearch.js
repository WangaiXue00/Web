import request from '@/utils/request'
// 查询基本薪资 
export function getBascSalary(params) {
  return request({
    url: '/system/jbxz/list',
    method: 'get',
    params: params
  })
}
