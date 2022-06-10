import { rest } from 'msw'
import { success, error } from './utils'
import qs from 'qs'

export const handlers = [
  rest.post('/mock/user/login', (req, res, ctx) => {
    const { username, password } = qs.parse(req.body as string)

    if (username === 'admin' && password === '123456') {
      return res(
        ctx.status(200),
        ctx.json(
          success({
            token: 'test-token'
          })
        )
      )
    }

    return res(ctx.status(200), ctx.json(error('用户名或密码错误！')))
  })
]
