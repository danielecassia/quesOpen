const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index.js');
const discussao = require('../model/discussaoModel');
const usuarios = require('../../usuario/model/usuarioModel');
const disciplina = require('../../disciplina/model/disciplinaModel');

class discussaoService {

  getAllDiscussoes = async () => {
    // const createdDiscussao = sequelize.query(
    //   'SELECT * FROM discussaos',
    //   {
    //     type: QueryTypes.SELECT,
    //   }
    // );
    const createdDiscussao = discussao.findAll({
      include: [
        {
          model: disciplina, 
          required: true,
        },
        {
          model: usuarios,
          required: true,
        }
    ]
    })
    return createdDiscussao;
  };

  getDiscussoesByUsuario = async(userId) => {
    const discussoesUsuario = discussao.findAll({
      where: {
        usuarioIdUsuario: userId,
      },
      include: [{
        model: disciplina,
        required: true,
      }]
    })
    return discussoesUsuario;
  };

  getDiscussoesByDisciplina = async(disciplinaId) => {
    const discussoesDisciplina = discussao.findAll({
      where: {
        disciplinaIdDisciplina: disciplinaId,
      },
      include: [{
        model: disciplina, usuarios,
      }, {
        model: usuarios,
      }]
    });
    return discussoesDisciplina;
  }

  getDiscussaoById = async(discussaoId) => {
    const discussaoPorId = discussao.findOne({
      where: {
        id_discussao: discussaoId,
      },
      include: [{
        model: disciplina,
      }, {
        model: usuarios,
      }]
    });
    return discussaoPorId;
  }

  createDiscussao = async(dadosDiscussao) => {
    const discussaoCreated = discussao.create(dadosDiscussao);
    console.log(discussaoCreated);
    return discussaoCreated;
  }
}


module.exports = new discussaoService();