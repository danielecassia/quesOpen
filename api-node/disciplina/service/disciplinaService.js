const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const disciplina = require('../model/disciplinaModel')

class disciplinaService {

  getDisciplinas = async () => {
    const createdDisciplinas = disciplina.findAll({
      raw: true,
      attributes: {
        exclude: ['senha','createdAt','updatedAt'],
      },
      order: [
        ['nome_disciplina','ASC'],
      ]
    });
    return createdDisciplinas;
  };
}


module.exports = new disciplinaService();