const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');

class disciplinaService {

  constructor(repository){
    this.disciplinaRepository = repository;
  };

  getDisciplinas = async () => {
    return this.disciplinaRepository.findAll();
  };
}


module.exports = new disciplinaService();