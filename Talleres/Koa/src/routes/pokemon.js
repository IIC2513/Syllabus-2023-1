const Router = require('koa-router');
const validatePokemonData = require('../middlewares/validatePokemonData');
const validateQueryParams = require('../middlewares/validateQueryParams');
const router = new Router();

const pokemons = require('../data/pokedex.json')


router.get('/', validateQueryParams,  ctx => {
    ctx.body = pokemons

    // const {name} = ctx.request.query;
    // ctx.body = (name)? pokemons.filter(pokemon => pokemon.name.toLowerCase() === name.toLowerCase()) : pokemons;
  });
  
  
router.get('/:id', ctx => {
  const id = parseInt(ctx.params.id);
  const pokemon = pokemons.find(pokemon => pokemon.id === id);
  if (pokemon) {
    ctx.body = pokemon;
  } else {
    ctx.status = 404;
    ctx.body = "Pokemon no encontrado";
  }
});

router.post('/', validatePokemonData, ctx => {
  const newPokemon = ctx.request.body;
  newPokemon.id = pokemons.length + 1;
  pokemons.push(newPokemon);
  ctx.status = 201;
  ctx.body = newPokemon;
});

module.exports = router