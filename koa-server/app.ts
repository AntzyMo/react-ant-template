import Koa from 'koa'

const app = new Koa()
app.listen(3000, () => {
  console.log('启动: http://localhost:3000')
})
