const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index');

class discussaoRepository{

  findAll = async () => {
    const allDiscussoes = await sequelize.query(
      `SELECT * FROM discussaos as dc
      INNER JOIN disciplinas as dp 
      ON dc.disciplinaIdDisciplina = dp.id_disciplina
      INNER JOIN usuarios as u 
      ON dc.usuarioIdUsuario = u.id_usuario`,
      {
        type: QueryTypes.SELECT
      }
    );
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
    return allDiscussoes;
  };

  findByUsuario = async(userId) => {
    const discussoesUsuario = await sequelize.query(
      `SELECT * FROM discussaos as dc
      INNER JOIN disciplinas as dp 
      ON dc.disciplinaIdDisciplina = dp.id_disciplina
      INNER JOIN usuarios as u 
      ON dc.usuarioIdUsuario = u.id_usuario
      WHERE dc.usuarioIdUsuario = :idUser`,
      {
        type: QueryTypes.SELECT,
        replacements: {
          idUser: userId
        }
      }
    );
    return discussoesUsuario;
  }

  findByDisciplina = async(disciplinaId) => {
    const discussoesDisciplina = await sequelize.query(
      `SELECT * FROM discussaos as dc
      INNER JOIN disciplinas as dp 
      ON dc.disciplinaIdDisciplina = dp.id_disciplina
      INNER JOIN usuarios as u 
      ON dc.usuarioIdUsuario = u.id_usuario
      WHERE dc.disciplinaIdDisciplina = :idDisc
      ORDER BY dc.data_discussao DESC`,
      {
        type: QueryTypes.SELECT,
        replacements: {
          idDisc: disciplinaId
        }
      }
    );
    return discussoesDisciplina;
  }

  findById = async(discussaoId) => {
    const discussao = await sequelize.query(
      `SELECT * FROM discussaos as dc
      INNER JOIN disciplinas as dp 
      ON dc.disciplinaIdDisciplina = dp.id_disciplina
      INNER JOIN usuarios as u 
      ON dc.usuarioIdUsuario = u.id_usuario
      WHERE dc.id_discussao = :idDisc`,
      {
        type: QueryTypes.SELECT,
        replacements: {
          idDisc: discussaoId
        }
      }
    );
    return discussao;
  }

  create = async(dadosDiscussao) => {
    const createdDiscussao = await sequelize.query(
      `INSERT INTO discussaos(titulo,descricao,data_discussao,createdAt,updatedAt,usuarioIdUsuario,disciplinaIdDisciplina) 
      VALUES(:titulo,:descricao,:data_discussao,:createdAt,:updatedAt,:usuarioIdUsuario,:disciplinaIdDisciplina)`,
      {
        type: QueryTypes.INSERT,
        replacements: {
          titulo: dadosDiscussao.titulo,
          descricao: dadosDiscussao.descricao,
          data_discussao: dadosDiscussao.data_discussao,
          createdAt: dadosDiscussao.createdAt,
          updatedAt: dadosDiscussao.updatedAt,
          usuarioIdUsuario: dadosDiscussao.usuarioIdUsuario,
          disciplinaIdDisciplina: dadosDiscussao.disciplinaIdDisciplina
        }
      }
    );
    return createdDiscussao;
  }

  delete = async(id) => {
      await sequelize.query(
      `DELETE FROM discussaos WHERE id_discussao = :idDiscussao;`,
      {
        type: QueryTypes.DELETE,
        replacements: {
          idDiscussao: id
        }
      }
    );
    await sequelize.query(
      `DELETE FROM comentarios WHERE discussaoIdDiscussao = :idDiscussao`,
      {
        type: QueryTypes.DELETE,
        replacements: {
          idDiscussao: id
        }
      }
    )
  }
}

module.exports = new discussaoRepository();