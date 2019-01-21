const pokedex = require('pokedex-promise-v2')
const P = new pokedex();

const { sendE } = require('../mixins/response-mixins')
 
const getPokemon = (req,res) =>{

  //ultimo pokemon valido: 802
  P.getPokemonByName('1')

  .then((response) => {
    const number = Math.round(Math.random()*10)
    
    res.send(`\t  Imagen del pokemon: ${response.sprites.front_default}
      El Id del pokemon es: ${response.id}
      El nombre del pokemon es: ${response.name}
      Un movimiento de '${response.name}' es: ${response.moves[number].move.name}`
    )   
  })
  .catch((responseError) => {
    //console.log(`Código del error: ${res.response.status}\n${res.response.statusText}`);
    sendE(res, 404, 'El pokemon aún no está registrado en el Pokedex :c </3')
    //res.send(res.response.status)

  });

}

const pokemonList = (req,res)=>{
  const interval = {
    limit: 10,
    offset: 34
  }
  P.getPokemonList(interval)
  .then((response)=>{
    console.log(response);
    
  })
  
}
module.exports = { getPokemon, pokemonList }