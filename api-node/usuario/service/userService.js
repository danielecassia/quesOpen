const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const usuario = require('../model/userModel.js')

class UserService {
  async createUser(user) {
    const saltRounds = 10;
    user.senha = await bcrypt.hash(user.senha, saltRounds);
    const createdUser = sequelize.query(
      'INSERT INTO usuarios(nome_usuario,data_nasc,email,senha)VALUES(:nomeUser,:data_nascUser,:emailUser,:senhaUser)',
      {
        replacements: {
          nomeUser: user.name,
          data_nascUser: user.data_nasc,
          emailUser: user.email,
          senhaUser: user.senha
        },
        type: QueryTypes.INSERT,
      }
    );
    return createdUser;
  }
}


module.exports = new UserService();