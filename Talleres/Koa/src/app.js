const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./routes');
const timingFunction = require('./middlewares/timing');
const testMiddlewares = require('./middlewares/testMiddlewares')

const app = new Koa();

// Veamos un ejemplo básico, un middleware que printea ctx
// async function ctxInfo(ctx, next) {
//     console.log(ctx)
//     await next()
// }

// app.use(ctxInfo)


// definimos los middlewares a usar 

// app.use(testMiddlewares.test1);
// app.use(testMiddlewares.test2);
// app.use(timingFunction);
// app.use(bodyParser());
// app.use(router.routes());
// app.use(router.allowedMethods());


// vamos a exportar nuestra app e inicializarla en index.js 
module.exports = app