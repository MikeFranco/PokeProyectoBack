const pokedex = require('pokedex-promise-v2')
const P = new pokedex();

const { sendE } = require('../mixins/response-mixins')
 
const getPokemon = (req,res) =>{

  //ultimo pokemon valido: 802
  //checar a ditto
  P.getPokemonByName('3')

  .then((response) => {
    res.send(`\t  Imagen del pokemon: ${response.sprites.front_default}
      El Id del pokemon es: ${response.id}
      El nombre del pokemon es: ${response.name}
      Un movimiento de '${response.name}' es: ${response.moves[0].move.name}`
    )   
  })
  .catch((responseError) => {
    //console.log(`Código del error: ${res.response.status}\n${res.response.statusText}`);
    sendE(res, 404, 'El pokemon aún no está registrado en el Pokedex :c </3')
    //res.send(res.response.status)

  });

}

module.exports = { getPokemon }