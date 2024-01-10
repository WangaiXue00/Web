import request from '@/utils/request'

// 新增惩奖信息
export function addReward(data) {
  return request({
    url: '/system/jcgl',
    method: 'post',
    data: data
  })
}

// 查询所有惩奖信息
export function inquireReward(params) {
  return request({
    url: '/system/jcgl/list',
    method: 'get',
    params: params
  })
}
// 查询单条惩奖信息
export function inquireOnlyReward(ygh) {
  return request({
    url: '/system/jcgl/'+ygh,
    method: 'get',
  })
}

// 查询详细惩奖信息
// export function inReward(ygh) {
//   return request({
//     url: '/system/jcgl/' + ygh,
//     method: 'get',
//   })
// }

// 修改惩奖信息
export function editReward(data) {
  return request({
    url: '/system/jcgl',
    method: 'put',
    data: data
  })
}

// 删除惩奖信息
export function deleteReward(ygh) {
  return request({
    url: '/system/jcgl/' + ygh,
    method: 'delete'
  })
}