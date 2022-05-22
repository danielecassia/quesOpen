const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const disciplina = require('../model/disciplinaModel')

class disciplinaService {

  getDisciplinas = async () => {
    // const createdDisciplinas = sequelize.query(
    //   'SELECT * FROM disciplinas',
    //   {
    //     type: QueryTypes.SELECT,
    //   }
    // );
    const createdDisciplinas = disciplina.findAll({
      raw: true,
      attributes: {
        exclude: ['senha','createdAt','updatedAt'],
      }
    });
    return createdDisciplinas;
  };
}


module.exports = new disciplinaService();