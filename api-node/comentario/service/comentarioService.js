const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const comentario = require('../model/comentarioModel')

class comentarioService {

  getComentarios = async () => {
    const createdComentario = sequelize.query(
      'SELECT * FROM comentarios',
      {
        type: QueryTypes.SELECT,
      }
    );
    return createdComentario;
  };
}


module.exports = new comentarioService();