const fs = require('fs');

const pokemons = JSON.parse(fs.readFileSync('pokedex.json', 'utf8'));

module.exports = pokemons