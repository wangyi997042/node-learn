const KKB = require('./kkb')
const app = new KKB();


// app.use((req, res) => {
//   res.writeHead(200)
//   res.end('hi wangyi')

// })

// const delay = () => Promise.resolve(
//   resolve => setTimeout(() => {
//     return resolve;
//   }, 2000)
// )
// app.use(async (ctx, next)=> {
//   ctx.body = '1'
//   setTimeout(() => {
//     ctx.body += '2'
//   }, 2000)
//   await next()
//   ctx.body += '3'
// })

// app.use(async (ctx, next) => {
//   ctx.body += '4';
//   await delay();
//   await next();
//   ctx.body += '5'
// })

// app.use(async (ctx, next) => {
//   ctx.body += '6'
// })

const static = require('./static')
app.use(static(__dirname+"/public"))

const Router = require('./router')
const router = new Router();

router.get('/index', async ctx => {ctx.body = 'index page'});
router.get('/post', async ctx => {ctx.body = 'wnagyi nihao!!'})

app.use(router.routes());

app.listen(3000, () => {
  console.log('server is at port: 3000')
})