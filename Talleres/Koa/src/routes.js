const Router = require('koa-router');
const pokemonRoutes = require('./routes/pokemon');

const router = new Router();

// Se definen las rutas
router.get('/', async (ctx) => {
  ctx.body = {
    message: 'Página Inicial',
  };
});

// router.use('/pokemon', pokemonRoutes.routes());

module.exports = router