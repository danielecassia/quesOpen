const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index');

const usuario = sequelize.define('usuario', {
  id_usuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nome_usuario: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nasc: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

usuario.sync({ alter: false, force: false })
  .then(() => console.log('A tabela usuario foi criada!'))
  .catch((error) => console.log(error));


module.exports = usuario;