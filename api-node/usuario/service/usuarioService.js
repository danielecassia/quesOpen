const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const usuario = require('../model/usuarioModel.js');
const usuarioRepository = require('../repository/usuarioRepository');

class usuarioService {

  createUser = async (user) => {
    return usuarioRepository.create(user);
  };

  getAllUsuarios = async () => {
    return usuarioRepository.findAll();
  };

  getUsuarioById = async(userId) => {
    return usuarioRepository.findById(userId);
  }

  userbyEmail = async(emailUsuario) => {
    return usuarioRepository.findByEmail(emailUsuario);
  }

  getCurrentUser = async(id) => {
    return usuarioRepository.currentUser(id);
  }

  deletarUsuario = async(id) => {
    return usuarioRepository.deleteUser(id);
  }

}


module.exports = new usuarioService();