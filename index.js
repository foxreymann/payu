const Koa = require('koa');
const app = new Koa();
// response
app.use(ctx => {
  ctx.redirect('https://www.payu.pl')
});
app.listen(3333);
