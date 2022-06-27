const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index');

const disciplina = sequelize.define('disciplina', {
  id_disciplina: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome_disciplina: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = disciplina;