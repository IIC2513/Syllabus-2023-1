const Router = require('koa-router');

const router = new Router();
const { Movie } = require('../../models');

router.get('/', async (ctx) => {
  console.log(Movie);
  try {
    const movies = await Movie.findAll();
    ctx.body = movies;
  } catch (error) {
    console.log(error);
    ctx.throw(404);
  }
});
module.exports = router;
