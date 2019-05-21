const pokedex = require('pokedex-promise-v2')
const P = new pokedex();

const { sendE } = require('../mixins/response-mixins')

const getID = (req, res) => {
  console.log('Se hizo una peticion a la lista de pokemones')
  const { id, limit } = req.query
  const newid = Number(id)
  const cuantospokes = Number(limit)
  listaPokes(newid, cuantospokes, req, res)

}

const listaPokes = (newid, cuantospokes, req, res) =>{
  const promises = new Array(cuantospokes).fill(0).map((_,index,array) => getPokemon(newid, index, req, res))

  Promise.all(promises)
  .then(response =>{
    console.log('Se manda la info al front');
    res.send(response)
  })
    .catch(error => res.send(error))
}

const getPokemon = (id, index, req,res) =>{
  console.log('Este es el id dentro de getPokemon', id);

  return P.getPokemonByName(id+index)
  .then(response => {
    const number = id == 132 ? 0 : Math.round(Math.random()*(response.moves.length-1))
    const result = {
      image: `${response.sprites.front_default}`,
      id: `${response.id}`,
      name: `${response.name}`,
      move: `${response.moves[number].move.name}`
    }
    return result

  })
  .catch(responseError => {
    return responseError
  });
}

module.exports = { listaPokes, getID }
