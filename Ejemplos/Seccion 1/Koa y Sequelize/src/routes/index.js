const Router = require('koa-router');
const directors = require('./directors');
const movies = require('./movies');

const router = new Router();

router.use('/directors', directors.routes());
router.use('/movies', movies.routes());

module.exports = router;