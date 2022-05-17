const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index');

const comentario = sequelize.define('comentario', {
  id_comentario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  data_comentario: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descricao_comentario: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});


comentario.sync({ alter: false, force: false })
  .then(() => console.log('A tabela comentario foi criada!'))
  .catch((error) => console.log(error));


module.exports = comentario;