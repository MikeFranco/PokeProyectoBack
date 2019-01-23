const pokedex = require('pokedex-promise-v2')
const P = new pokedex();

const { sendE } = require('../mixins/response-mixins')

const pokemonList = (req,res)=>{
  const interval = {
    limit: 10,
    offset: 34
  }

  P.getPokemonsList(interval)
  .then((response)=>{
    res.send(response)

  }).catch((responseError) => {
    console.log(res);
    sendE(res, 405, 'El pokemon aún no está registrado en el Pokedex :c </3')
  });
}



module.exports = { pokemonList }