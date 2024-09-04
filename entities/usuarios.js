const usuariosRepository  = require('../repositories/usuarios.repository')

class Usuario {
    id
    username
    password
    deletadoEm


    constructor() {
        this.id = 0;
        this.username = ''
        this.password = ''
        this.deletadoEm = null
    }

    async save() {
        if ( this.id=== 0) { 
            const userExist = await usuariosRepository.findByUsernameDb(this.username)
            if (userExist) {
                throw new Error('Username já existe')
            }
            await usuariosRepository.insert(this)
        } else { 
            await usuariosRepository.updateById(this)
        }
    }



    static createFromDb(itemBanco) {
        const newUsuario = new Usuario()
        newUsuario.id = itemBanco.id
        newUsuario.username = itemBanco.username
        newUsuario.password = itemBanco.password
        newUsuario.deletadoEm = itemBanco.deletado_em
        return newUsuario;
    }

    static async findByUsername(username) {
        const itemBanco = await usuariosRepository.findByUsernameDb(username)
        if (!itemBanco) {
            return null //verificare se e isso msm 
        }
        return Usuario.createFromDb(itemBanco);
      }
}

module.exports = { Usuario }

