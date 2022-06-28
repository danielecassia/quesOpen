const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const disciplina = require('../model/disciplinaModel')
const disciplinaRepository = require('../repository/disciplinaRepository');

class disciplinaService {

  getDisciplinas = async () => {
    // const createdDisciplinas = disciplina.findAll({
    //   raw: true,
    //   attributes: {
    //     exclude: ['senha','createdAt','updatedAt'],
    //   },
    //   order: [
    //     ['nome_disciplina','ASC'],
    //   ]
    // });
    // return createdDisciplinas;
    return disciplinaRepository.findAll();
  };
}


module.exports = new disciplinaService();