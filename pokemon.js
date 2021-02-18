const pokemon = require('pokemon');
pokemon.all();
//=> ['Bulbasaur', …]
 
pokemon.random();
//=> 'Snorlax'
 
pokemon.getName(147);
//=> 'Dratini'
 
pokemon.getId('Dratini');
//=> 147
module.exports = {"getName":pokemon.getName};
module.exports = {"all":pokemon.all};