// Librerías
const app = require('express')();
const pokedex = require('pokedex-promise-v2');

//Rutas
const poke = require('./PokeApi/back');

const port = process.env.PORT || 6001;

/* const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://localhost:6001/"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?")) */


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  res.send('Backend Funcionando')
});

app.get('/1', function(req, res, next) {
 // Handle the post for this route
 res.send('Esto también funciona')
});

//app.get('/', (req, res) => res.send('Back funcionando'));

app.route('/prueba')
  .get(poke.getPokemon)

app.listen(port, () => console.log(`Corriendo el back en: ${port}`));


module.exports = { app };