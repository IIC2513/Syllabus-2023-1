// Este middleware validará los nuevos pokemon a agregar

const validTypes = [
    'Normal', 'Fighting', 'Flying', 'Poison', 'Ground', 'Rock', 'Bug', 'Ghost', 'Steel',
    'Fire', 'Water', 'Grass', 'Electric', 'Psychic', 'Ice', 'Dragon', 'Dark', 'Fairy'
  ];
  
  async function validatePokemonData(ctx, next) {
    const { name, type } = ctx.request.body;
  


    if (!name || name.trim() === '') {
      ctx.throw(400, "Invalid data: name must be a non-empty string")
    } else if (!Array.isArray(type)) {
      ctx.throw(400, 'Invalid data: type must an array of the Pokemon types.');
    } else if (!type.every((typing) => validTypes.includes(typing))) {
      ctx.throw(400, 'Invalid data: type array has an invalid typing');     
    } 
    else {
      await next();
    }
  }
  
  module.exports = validatePokemonData;
  