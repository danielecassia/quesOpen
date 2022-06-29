const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const disciplina = require('../model/disciplinaModel')

class disciplinaService {

  constructor(repository = require('../repository/disciplinaRepository')){
    this.disciplinaRepository = repository;
  };

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
    return this.disciplinaRepository.findAll();
  };
}


module.exports = new disciplinaService();