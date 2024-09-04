const usuario = require('../p/service/usuarios.service')

module.exports = (app) => {
    app.post('/usuario', usuario.create)
//http://127.0.0.1:6000/usuario

}