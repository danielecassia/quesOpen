const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const usuario = require('../model/usuarioModel.js')

class usuarioService {

  createUser = async (user) => {
    const saltRounds = 10;
    let senha = await bcrypt.hash(user.senha, saltRounds);
    let now = new Date();
    
    const createdUser = sequelize.query(
      'INSERT INTO usuarios (nome_usuario, data_nasc,email, senha, createdAt, updatedAt ) VALUES (:nomeUser, :data_nascUser, :emailUser, :senhaUser, :createdAt, :updatedAt)',
      {
        replacements: {
          nomeUser: user.name,
          data_nascUser: user.data_nasc,
          emailUser: user.email,
          senhaUser: senha,
          createdAt: now,
          updatedAt: now,
        },
        type: QueryTypes.INSERT,
      }
    );
    return createdUser;
  };

  getUsuarios = async () => {
    const createdUsuarios = sequelize.query(
      'SELECT * FROM usuarios',
      {
        type: QueryTypes.SELECT,
      }
    );
    return createdUsuarios;
  };
}


module.exports = new usuarioService();