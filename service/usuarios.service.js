const { Usuario } = require('../entities/usuarios')

const create = async (req, res) => {
  const { nome, senha } = req.body

  if (nome && senha) {
    try {
      const newUsuario = new Usuario();
      newUsuario.username = nome;
      newUsuario.password = senha;

      await newUsuario.save();
      res.send('usuario cadastrado com sucesso')
    } catch (error) {
      console.error("🚀 ~ create ~ error:", error)
      res.status(500).send('Erro ao adicionar ao banco');

      if (error.message === 'username já existe') {
        res.status(400).send('o username já existe')
      } else {
        res.status(500).send('erro ao adicionar ao Banco')
      }
    }
  }
  else {
    res.status(400).send('nome ou senha não fornecido na solicitação');
  }
};



module.exports = { create }