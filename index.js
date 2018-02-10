const Koa = require('koa')
const cors = require('@koa/cors')
const superagent = require('superagent')

const app = new Koa()
app.use(cors())

app.use(async ctx => {
  // make auth call
  // make order call
  const response = {
    redirect: 'https://www.payu.pl'
  }
  ctx.body = response
})

app.listen(8080)
