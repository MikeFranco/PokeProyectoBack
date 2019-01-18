const pokedex = require('pokedex-promise-v2')
const P = new pokedex();

const { sendE } = require('../mixins/response-mixins')

const getPokemon = (req,res) =>{

  //ultimo pokemon valido: 802
  P.getPokemonByName('8')

  .then((response) => {
    res.send(response.name);
  })
  .catch((responseError) => {
    //console.log(`Código del error: ${res.response.status}\n${res.response.statusText}`);
    sendE(res, 404, 'El pokemon aún no nace :(')
    //res.send(res.response.status)

  });

}

module.exports = { getPokemon }