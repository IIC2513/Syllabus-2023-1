const Router = require('koa-router');

const router = new Router();
const { Director } = require('../../models');

router.get('/', async (ctx) => {
  try {
    const directors = await Director.findAll();
    ctx.body = directors;
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});
module.exports = router;
