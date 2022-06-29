const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');

class comentarioService {

  constructor(repository){
    this.comentarioRepository = repository;
  };

  getComentarios = async () => {
    return this.comentarioRepository.findAll();
  };

  getComentariosByDiscussao = async (idDiscussao) => {
    return this.comentarioRepository.comentariosByDiscussao(idDiscussao);
  };

  createComentario = async(dadosComentario) => {
    return this.comentarioRepository.create(dadosComentario);
  }
}


module.exports = new comentarioService();