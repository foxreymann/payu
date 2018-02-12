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
  let res = await superagent
    .post(authUrl)
    .send('grant_type=client_credentials')
    .send('client_id=' + clientId)
    .send('client_secret=' + clientSecret)

  // extract auth token
  const authToken = res.body['access_token']

  const amount = ctx.request.query.amount * 100

  // create order
  const order = {
    customerIp: "127.0.0.1",
    merchantPosId: clientId,
    description: "Darowizna",
    currencyCode: "PLN",
    totalAmount: amount,
    products: [
      {
        name: "Darowizna",
        unitPrice: amount,
        quantity: 1
      }
    ]
  }

  // make order call
  res = await superagent
    .post(orderUrl)
    .set('Authorization', 'Bearer ' + authToken)
    .send(order)


  const response = {
    redirect: res.redirects[0]
  }

  ctx.body = response
})

app.listen(8081)
