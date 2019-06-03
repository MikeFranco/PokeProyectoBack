// Librerías
const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Rutas
const pokemonFunctions = require('./functions/getPokemon');
const port = process.env.PORT || 6001;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => res.send('Nothing to see here 👀 - PokeProyecto'));

app.route('/get-random-pokemon')
  .get(pokemonFunctions.getPokemonRandom)

app.route('/get-specific-pokemon')
  .get(pokemonFunctions.getSpecificPokemon)

app.listen(port, () => console.log(`Corriendo el back en el puerto: ${port}`));

module.exports = { app };