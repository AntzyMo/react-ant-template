import { success, error } from '../utils'
import qs from 'qs'

export default [
  {
    url: '/mock/user/login',
    method: 'post',
    response: ({ body }: any) => {
      const { username, password } = qs.parse(body)
      if (username === 'admin' && password === '123456') {
        return success({
          token: 'test-token'
        })
      }
      return error('账号密码错误')
    }
  }
]
