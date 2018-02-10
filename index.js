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

console.log(ctx.request)

  // make auth call
  const authRes = await superagent
    .post(authUrl)
    .send('grant_type=client_credentials')
    .send('client_id=' + clientId)
    .send('client_secret=' + clientSecret)

  // extract auth token
  const authToken = authRes.body['access_token']
console.log(authToken)

  // create order
  const order = {
    customerIp: "127.0.0.1",
    merchantPosId: "145227",
    description: "RTV market",
    currencyCode: "PLN",
    totalAmount: "21000",
    products: [
      {
        name: "Wireless Mouse for Laptop",
        unitPrice: "21000",
        quantity: "1"
      }
    ]
  }

  // make order call

  const response = {
    redirect: 'https://www.payu.pl'
  }

  ctx.body = response
})

app.listen(8081)
