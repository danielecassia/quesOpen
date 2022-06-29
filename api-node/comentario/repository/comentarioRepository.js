const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index');

class comentarioRepository{
  findAll = async() => {
    const comentarios = await sequelize.query(
      `SELECT * FROM comentarios ORDER BY data_comentario DESC`,
      {
        type: QueryTypes.SELECT
      }
    );
    return comentarios;
  }

  comentariosByDiscussao = async(DiscussaoId) => {
    const comentariosDiscussao = await sequelize.query(
      `SELECT * FROM comentarios as c
      INNER JOIN usuarios as u 
      ON c.usuarioIdUsuario = u.id_usuario
      INNER JOIN discussaos as d
      ON c.discussaoIdDiscussao = d.id_discussao
      WHERE discussaoIdDiscussao = :idDiscussao`,
      {
        type: QueryTypes.SELECT,
        replacements: {
          idDiscussao: DiscussaoId
        }
      }
    );
    return comentariosDiscussao;
  }

  createComentario = async(dadosComentario) => {
    const createdComentario = await sequelize.query(
      `INSERT INTO comentarios(data_comentario,descricao_comentario,createdAt,updatedAt,usuarioIdUsuario,discussaoIdDiscussao) VALUES(:data,:desc,:created,:updated,:usu,:disc)`,
      {
        type: QueryTypes.INSERT,
        replacements: {
          data: dadosComentario.data_comentario,
          desc: dadosComentario.descricao_comentario,
          created: dadosComentario.createdAt,
          updated: dadosComentario.updatedAt,
          disc: dadosComentario.discussaoIdDiscussao,
          usu: dadosComentario.usuarioIdUsuario
        }
      }
      );
    return createdComentario;
  }

}



module.exports = new comentarioRepository();