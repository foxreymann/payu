const Koa = require('koa')
const cors = require('@koa/cors')
const superagent = require('superagent')

const authUrl = 'https://secure.payu.com/pl/standard/user/oauth/authorize'
const orderUrl = 'https://secure.payu.com/api/v2_1/orders'
const clientId = process.env.PAYU_CLIENT_ID
const clientSecret = process.env.PAYU_CLIENT_SECRET

const app = new Koa()
app.use(cors())

app.use(async ctx => {

  // make auth call
  const authRes = await superagent
    .post(authUrl)
    .send('grant_type=client_credentials')
    .send('client_id=' + clientId)
    .send('client_secret=' + clientSecret)
console.log(authRes)

  // make order call

  const response = {
    redirect: 'https://www.payu.pl'
  }

  ctx.body = response
})

app.listen(8081)
