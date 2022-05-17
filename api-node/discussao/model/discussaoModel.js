const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index');

const discussao = sequelize.define('discussao', {
  id_discussao: {
    type: DataTypes.INTEGER,
    primaryKey: true,
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


discussao.sync({ alter: false, force: false })
  .then(() => console.log('A tabela discussao foi criada!'))
  .catch((error) => console.log(error));


module.exports = discussao;