const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index');

const discussao = sequelize.define('discussao', {
  id_discussao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
    allowNull: false,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {  // descricao_discussao?
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_discussao: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = discussao;