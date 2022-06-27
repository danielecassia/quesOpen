const bcrypt = require('bcrypt');
const e = require('cors');
const { QueryTypes, QueryError } = require('sequelize');
const sequelize = require('../../database/index');
const usuario = require('../model/usuarioModel.js')

class usuarioRepository {
  create = async(user) => {
    const saltRounds = 10;
    user.senha = await bcrypt.hash(user.senha, saltRounds);
    const createdUser = await sequelize.query(
      'INSERT INTO usuarios(nome_usuario,email, senha, data_nasc) VALUES(:nome, :email, :senha, :data_nasc)',
      {
        type: QueryTypes.INSERT,
        replacements: {
          nome: user.nome_usuario,
          email: user.email,
          senha: user.senha,
          data_nasc: user.data_nasc,
        }
      }
      );
    return createdUser;
  }

  findAll = async () => {
    return await sequelize.query(
      "SELECT id_usuario, nome_usuario, email, data_nasc FROM usuarios",
      {
        type: QueryTypes.SELECT
      }
    );
  };

  findById = async(userId) => {
    return await sequelize.query(
      "SELECT * FROM usuarios WHERE id_usuario = :idUsuario",
      {
        type: QueryTypes.SELECT,
        replacements: {
          idUsuario: userId,
        }
      }
    )
  };

  findByEmail = async(emailUsuario) => {
    return await sequelize.query(
      "SELECT * FROM usuarios WHERE email = :emailUser",
      {
        type: QueryTypes.SELECT,
        replacements: {
          emailUser: emailUsuario
        }
      }
      )
  }

  currentUser = async(id) => {
    return await sequelize.query(
      "SELECT id_usuario, nome_usuario, email, data_nasc FROM usuarios WHERE id_usuario = :id",
      {
        type: QueryTypes.SELECT,
        replacements: {
          id: id,
        }
      }
    );
  }

  deleteUser = async(id) => {
    return await sequelize.query(
      "DELETE FROM usuarios WHERE id_usuario = :id",
      {
        type: QueryTypes.DELETE,
        replacements: {
          id: id,
        }
      }
    );
  }

}

module.exports = new usuarioRepository();