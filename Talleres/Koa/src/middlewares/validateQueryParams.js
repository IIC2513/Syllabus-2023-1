// Este middleware valida los queryparams del request GET /

async function validateQueryParams(ctx, next) {
    const validKeys = ['name'];
    const queryKeys = Object.keys(ctx.request.query)

    if (queryKeys.length === 0) {
        await next();
    }


    for (const key of queryKeys) {
        if (!validKeys.includes(key)){
            ctx.throw(400,`Query Parameter no válido: ${key}`);
            
        }
        else {    
            await next()
        }
    }
  }
  
  module.exports = validateQueryParams;