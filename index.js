const Koa = require('koa')
const cors = require('@koa/cors')

const app = new Koa()
app.use(cors())

app.use(ctx => {
  ctx.redirect('https://www.payu.pl')
})

app.listen(80)
