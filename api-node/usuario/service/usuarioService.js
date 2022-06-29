const bcrypt = require('bcrypt');
const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');

class usuarioService {

  constructor(repository){
    this.usuarioRepository = repository;
  };
  
  createUser = async (user) => {
    return this.usuarioRepository.create(user);
  };

  getAllUsuarios = async () => {
    return this.usuarioRepository.findAll();
  };

  getUsuarioById = async(userId) => {
    return this.usuarioRepository.findById(userId);
  }

  userbyEmail = async(emailUsuario) => {
    return this.usuarioRepository.findByEmail(emailUsuario);
  }

  getCurrentUser = async(id) => {
    return this.usuarioRepository.currentUser(id);
  }

  deletarUsuario = async(id) => {
    return this.usuarioRepository.deleteUser(id);
  }

}


module.exports = new usuarioService();