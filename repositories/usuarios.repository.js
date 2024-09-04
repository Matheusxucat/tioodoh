const { Usuario } = require('../entities/usuarios');
const knex = require('../utils/database')

const findById = (idUsuario) => {
  return knex('usuarios')
    .where('id', idUsuario)
    .andWhere('deletado_em', 0)
    .first()
    .then((itemBanco) => {
      if (!itemBanco) {
        throw new Error('Nenhum usuario encontrado com o id fornecido');
      }
      return Usuario.createFromDb(itemBanco)
    })

};

const insert = (usuario) => {
  return knex('usuarios').insert({
    username: usuario.username,
    password: usuario.password,
  })
}

const findByUsernameDb = (username) => {
  return knex('usuarios')
    .select('id', 'username', 'password', 'deletado_em')
    .where({ username })
    .first()
}

const updateById = (usuario) => {
  return knex('usuarios')
    .where({ id: usuario.id })
    .update({
      username: usuario.username,
      password: usuario.password
    })
}

module.exports = {
  findById,
  insert,
  findByUsernameDb,
  updateById
}





