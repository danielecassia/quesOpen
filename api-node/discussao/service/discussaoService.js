const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');

class discussaoService {

  constructor(repository){
    this.discussaoRepository = repository;
  };
 
  getAllDiscussoes = async () => {
    return this.discussaoRepository.findAll();
  };

  getDiscussoesByUsuario = async(userId) => {
    return this.discussaoRepository.findByUsuario(userId);
  };

  getDiscussoesByDisciplina = async(disciplinaId) => {
    return this.discussaoRepository.findByDisciplina(disciplinaId);
  }

  getDiscussaoById = async(discussaoId) => {
    return this.discussaoRepository.findById(discussaoId);
  }

  createDiscussao = async(dadosDiscussao) => {
    return this.discussaoRepository.create(dadosDiscussao);
  }

  async deletarDiscussao(id) {
    return this.discussaoRepository.delete(id);
  }
}


module.exports = new discussaoService();