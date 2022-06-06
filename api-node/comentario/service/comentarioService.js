const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const comentario = require('../model/comentarioModel');
const discussao = require('../../discussao/model/discussaoModel');
const usuario = require('../../usuario/model/usuarioModel');

class comentarioService {

  getComentarios = async () => {
    const createdComentario = comentario.findAll();
    return createdComentario;
  };

  getComentariosByDiscussao = async (idDiscussao) => {
    const createdComentario = comentario.findAll(
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
    const comentarioCreated = comentario.create(dadosComentario);
    console.log(comentarioCreated);
    return comentarioCreated;
  }
}


module.exports = new comentarioService();