// middleware de testeo básico, notar el async await y cómo se ejecutan los console.log después del await

async function test1(ctx, next) {
    console.log('Pasando por test1...');
    console.log('Vamos a esperar a los middlewares siguientes a test 1...');
    await next();
    console.log(`Terminados de correr todos los middlewares posteriores, nos devolvemos a test1`);
  };

async function test2(ctx, next) {
    console.log('Pasando por test2...');
    console.log('Vamos a esperar a los middlewares siguientes a test2...');
    await next();
    console.log(`Terminados de correr todos los middlewares posteriores, nos devolvemos a test2`);
};


module.exports = {test1, test2};