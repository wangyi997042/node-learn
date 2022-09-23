const Koa = require('koa')
const app = new Koa()

// app.use((ctx, next) => {
//     ctx.body = [
//         {
//             name: 'wangyi'
//         }
//     ]
//     next()
// })

// const router = {}
// router['/html'] = ctx => {
//     ctx.type = 'text/html;charset=utf-8'
//     ctx.body = `<b>王一${ctx.body[1].name}真帅</b>`
// }

// app.use((ctx, next) => {
//     ctx.body && ctx.body.push(
//         {
//             name: 'wangyia'
//         }
//     )
//     if(ctx.url !== '/favicon.ico') {
//         console.log('url'+ctx.url)
//         router[ctx.url](ctx)
//     }

// })

app.use(async (ctx, next) => {
    const start = new Date().getTime()
    console.log(`start ${ctx.url}`)
    await next()
    const end = new Date().getTime()
    console.log(`请求${ctx.url}, 耗时${parseInt(end-start)}ms`)
})

app.use(require('koa-static')(__dirname + '/'))
const router = require('koa-router')()
router.get('/string', (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})
router.get('/data', (ctx, next) => {
    ctx.body = {
        ...router
    }
})
app.use(router.routes())

app.listen(3000, () => {
    console.log('server is at port: 3000')
})