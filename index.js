// Librerías
const app = require('express')();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Rutas
const unPoke = require('./PokeApi/getPokemon');
const variosPokes = require('./PokeApi/pokemonList')
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
  .post(unPoke.getPokemon)

app.route('/pokemonEspec')
  .get(unPoke.getID)

app.route('/pokemonIntervalo')
  .get(variosPokes.pokemonList)

app.listen(port, () => console.log(`Corriendo el back en: ${port}`));


module.exports = { app };