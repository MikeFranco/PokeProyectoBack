const pokedex = require('pokedex-promise-v2')
const P = new pokedex();

const { sendE } = require('../mixins/response-mixins')

const getPokemon = (req,res) =>{
  const id = Math.round(Math.random()*802)
  const number = id == 132 ? 0 : Math.round(Math.random()*10);

  P.getPokemonByName(id)
  .then((response) => {
    console.log("Se hizo una petición de Pokemón Random");
    res.send({
      image: `${response.sprites.front_default}`,
      id: `${response.id}`,
      name: `${response.name}`,
      move: `${response.moves[number].move.name}`
    })

  })
  .catch((responseError) => {
    sendE(res, 404, 'El pokemon aún no está registrado en el Pokedex :c </3')
  });

}

const getID = (req, res) => {
  const { id } = req.query
  const newid = Number(id)
  respBack(newid,res)

}

const respBack = (newid, res) => {
  const number = newid == 132 ? 0 : Math.round(Math.random()*10);
  P.getPokemonByName(newid)
  .then((respuesta) =>{
    console.log('Se hizo petición de ID específico');
    
    res.send({
      image: `${respuesta.sprites.front_default}`,
      id: `${respuesta.id}`,
      name: `${respuesta.name}`,
      move: `${respuesta.moves[number].move.name}`
    })
  })
  .catch((responseError) => {
    sendE(res, 700, 'Error en la función del respBack')
  });

}

module.exports = { getPokemon, getID, respBack }