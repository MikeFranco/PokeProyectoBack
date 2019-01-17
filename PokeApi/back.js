const pokedex = require('pokedex-promise-v2')
const P = new pokedex();

const getPokemon = (req,res) =>{

  P.getPokemonByName('1')
  .then(function(response) {
    res.send(response.name)
  })
  /* .then((response)=>{
    res.send(response.id)
  }) */
  .catch(function(error) {
    console.log('There was an ERROR: ', error);
  });

}

module.exports = { getPokemon }