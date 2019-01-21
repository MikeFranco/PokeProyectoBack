const pokedex = require('pokedex-promise-v2')
const P = new pokedex();

const { sendE } = require('../mixins/response-mixins')
 
const getPokemon = (req,res) =>{

  //ultimo pokemon valido: 802
  //checar a ditto id 132
  P.getPokemonByName('1')

  .then((response) => {
    const number = Math.round(Math.random()*10)
    res.send([
      {image: `${response.sprites.front_default}`},
      {id: `${response.id}`},
      {name: `${response.name}`},
      {move: `${response.moves[number].move.name}`}
    ])  

  })
  .catch((responseError) => {
    sendE(res, 404, 'El pokemon aún no está registrado en el Pokedex :c </3')

  });

}

const pokemonList = (req,res)=>{
  const interval = {
    limit: 10,
    offset: 34
  }
  P.getPokemonsList(interval)
  .then((response)=>{
    res.send(response)
    
  })
  
}
module.exports = { getPokemon, pokemonList }