const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const discussao = require('../../discussao/model/discussaoModel');
const usuario = require('../../usuario/model/usuarioModel');

class comentarioService {

  constructor(comentario = require('../model/comentarioModel')){
    this.comentarioModel = comentario;
  };

  getComentarios = async () => {
    const createdComentario = this.comentarioModel.findAll();
    return createdComentario;
  };

  getComentariosByDiscussao = async (idDiscussao) => {
    const createdComentario = this.comentarioModel.findAll(
      {
        where: {discussaoIdDiscussao: idDiscussao},
        order: [
          ['data_comentario','DESC'], 
        ],
        include: [{
          model: discussao,
        },
        {
          model: usuario,
        }] 
      }
    );
    return createdComentario;
  };

  createComentario = async(dadosComentario) => {
    const comentarioCreated = this.comentarioModel.create(dadosComentario);
    console.log(comentarioCreated);
    return comentarioCreated;
  }
}


module.exports = new comentarioService();