const { QueryTypes } = require('sequelize');
const sequelize = require('../../database/index');

class disciplinaRepository{
  findAll = async() => {
    const disciplinas = await sequelize.query(
      `SELECT * FROM disciplinas ORDER BY nome_disciplina ASC`,
      {
        type: QueryTypes.SELECT
      }
    );
    return disciplinas;
  }
}

module.exports = new disciplinaRepository();