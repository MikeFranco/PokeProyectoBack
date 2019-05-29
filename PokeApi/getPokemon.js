const pokedex = require('pokedex-promise-v2');
const P = new pokedex();
const { sendE } = require('../mixins/response-mixins');

const getPokemonRandom = (req,res) => {
  const id = Math.round(Math.random()*802);
  const number = id == 132 ? 0 : Math.round(Math.random()*10);

  P.getPokemonByName(id)
  .then(response => {
    res.send({
      image: `${response.sprites.front_default}`,
      id: `${response.id}`,
      name: `${response.name}`,
      move: `${response.moves[number].move.name}`
    })

  })
  .catch(() => {
    sendE(res, 404, 'El pokemon aún no está registrado en el Pokedex :c </3');
  });

}

const getSpecificPokemon = (req, res) => {
  const { id } = req.query;
  const numberId = Number(id);
  const number = numberId == 132 ? 0 : Math.round(Math.random()*10);
  P.getPokemonByName(numberId)
  .then(response => {
    res.send({
      image: `${response.sprites.front_default}`,
      id: `${response.id}`,
      name: `${response.name}`,
      move: `${response.moves[number].move.name}`
    })

  })

  .catch(() => {
    sendE(res, 700, 'Error en la función del getSpecificPokemon')
  });

}

module.exports = { getPokemonRandom, getSpecificPokemon}