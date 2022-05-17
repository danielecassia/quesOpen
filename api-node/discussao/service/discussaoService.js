const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const discussao = require('../model/discussaoModel')

class discussaoService {

  getDisciplinas = async () => {
    const createdDiscussao = sequelize.query(
      'SELECT * FROM discussaos',
      {
        type: QueryTypes.SELECT,
      }
    );
    return createdDiscussao;
  };
}


module.exports = new discussaoService();