// Librerías
const app = require('express')();
const pokedex = require('pokedex-promise-v2');

//Rutas
const poke = require('./PokeApi/back');
const port = process.env.PORT || 6001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  res.send('Backend Funcionando')
});

app.route('/verpokemones')
  .get(poke.getPokemon)
  .post(poke.pokemonList)
app.listen(port, () => console.log(`Corriendo el back en: ${port}`));


module.exports = { app };