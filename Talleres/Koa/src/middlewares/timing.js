// Middleware para timing
async function timing(ctx, next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    // ctx.set('X-Response-Time', `${ms}ms`);
    console.log(`The request took ${ms} milliseconds`);
  };

module.exports = timing