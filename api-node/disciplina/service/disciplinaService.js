const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const disciplina = require('../model/disciplinaModel')

class disciplinaService {

  getDisciplinas = async () => {
    const createdDisciplinas = sequelize.query(
      'SELECT * FROM comentarios',
      {
        type: QueryTypes.SELECT,
      }
    );
    return createdDisciplinas;
  };
}


module.exports = new disciplinaService();