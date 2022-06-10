import request from '../utils/request'

// 登录
export const login = (data: any) => {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
