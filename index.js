// Librerías
const app = require('express')();
const pokedex = require('pokedex-promise-v2');

//Rutas
const poke = require('./PokeApi/back');

const port = process.env.PORT || 6001;


app.get('/', (req, res) => res.send('Back funcionando'));

app.route('/prueba')
  .get(poke.getPokemon);

app.listen(port, () => console.log(`Corriendo el back en: ${port}`));

module.exports = { app };
