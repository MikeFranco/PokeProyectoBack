const pokedex = require('pokedex-promise-v2')
const P = new pokedex();

const { sendE } = require('../mixins/response-mixins')

const pokemonList = (req,res)=>{
  const interval0 = {
   limit: 10,
   offset: 34
 }
 console.log('Intervalo hardcodeado', interval0);

 const { elreq } = req;
 console.log('Intervalo del front:', elreq);

 P.getPokemonsList(interval0)
 .then((response)=>{
   res.send(response)

 }).catch((responseError) => {
   console.log(res);
   sendE(res, 405, 'El pokemon aún no está registrado en el Pokedex :c </3')
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

module.exports = { pokemonList, getID }