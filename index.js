const Koa = require('koa')
const cors = require('@koa/cors')

const app = new Koa()
app.use(cors())

app.use(async ctx => {
  const response = {
    redirect: 'https://www.payu.pl'
  }
  ctx.body = response
})

app.listen(8080)
