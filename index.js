const Koa = require('koa')
const cors = require('@koa/cors')
const superagent = require('superagent')

const authUrl = 'https://secure.payu.com/pl/standard/user/oauth/authorize'
const orderUrl = 'https://secure.payu.com/api/v2_1/orders'

const app = new Koa()
app.use(cors())

app.use(async ctx => {
  // make auth call
  const authRes = superagent
    .post(authUrl)
grant_type=client_credentials
client_id=145227
client_secret=12f071174cb7eb79d4aac5bc2f07563f'
  // make order call
  const response = {
    redirect: 'https://www.payu.pl'
  }
  ctx.body = response
})

app.listen(8080)
