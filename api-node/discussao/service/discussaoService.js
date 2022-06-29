const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const discussaoRepository = require('../repository/discussaoRepository');

class discussaoService {

  constructor(repository = require('../repository/discussaoRepository')){
    this.discussaoRepository = repository;
  };
 
  getAllDiscussoes = async () => {
    // const createdDiscussao = discussao.findAll({
    //   include: [
    //     {
    //       model: disciplina, 
    //       required: true,
    //     },
    //     {
    //       model: usuarios,
    //       required: true,
    //     }
    // ]
    // })
    // return createdDiscussao;
    return this.discussaoRepository.findAll();
  };

  getDiscussoesByUsuario = async(userId) => {
    // const discussoesUsuario = discussao.findAll({
    //   where: {
    //     usuarioIdUsuario: userId,
    //   },
    //   include: [{
    //     model: disciplina, usuarios,
    //   }, {
    //     model: usuarios,
    //   }]
    // })
    // return discussoesUsuario;
    return this.discussaoRepository.findByUsuario(userId);
  };

  getDiscussoesByDisciplina = async(disciplinaId) => {
    // const discussoesDisciplina = discussao.findAll({
    //   where: {
    //     disciplinaIdDisciplina: disciplinaId,
    //   },
    //   order: [
    //     ['data_discussao','DESC']
    //   ],
    //   include: [{
    //     model: disciplina, usuarios,
    //   }, {
    //     model: usuarios,
    //   }]
    // });
    // return discussoesDisciplina;
    return this.discussaoRepository.findByDisciplina(disciplinaId);
  }

  getDiscussaoById = async(discussaoId) => {
    // const discussaoPorId = discussao.findOne({
    //   where: {
    //     id_discussao: discussaoId,
    //   },
    //   include: [{
    //     model: disciplina,
    //   }, {
    //     model: usuarios,
    //   }]
    // });
    // return discussaoPorId;
    return this.discussaoRepository.findById(discussaoId);
  }

  createDiscussao = async(dadosDiscussao) => {
    // const discussaoCreated = discussao.create(dadosDiscussao);
    // console.log(discussaoCreated);
    // return discussaoCreated;
    return this.discussaoRepository.create(dadosDiscussao);
  }

  async deletarDiscussao(id) {
    // const deletado = await discussao.destroy({
    //     where: {
    //       id_discussao: id,
    //     },
    // })
    // return deletado;
    return this.discussaoRepository.delete(id);
  }
}


module.exports = new discussaoService();