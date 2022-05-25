const { DataTypes, Model, ForeignKeyConstraintError } = require('sequelize');
const sequelize = require('../../database/index');
const disciplina = require('../../disciplina/model/disciplinaModel');
const comentario = require('../../comentario/model/comentarioModel');
const discussao = require('../../discussao/model/discussaoModel');

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

usuario.hasMany(discussao);
discussao.belongsTo(usuario);

usuario.hasMany(comentario);
comentario.belongsTo(usuario); 

disciplina.hasMany(discussao);
discussao.belongsTo(disciplina);

discussao.hasMany(comentario);
comentario.belongsTo(discussao);

usuario.sync({ alter: false, force: false })
  .then(() => console.log('A tabela usuario foi criada!'))
  .catch((error) => console.log(error));

disciplina.sync({ alter: false, force: false })
  .then(() => console.log('A tabela disciplina foi criada!'))
  .catch((error) => console.log(error));

discussao.sync({ alter: false, force: false })
  .then(() => console.log('A tabela discussao foi criada!'))
  .catch((error) => console.log(error));

comentario.sync({ alter: false, force: false })
  .then(() => console.log('A tabela comentario foi criada!'))
  .catch((error) => console.log(error));

module.exports = usuario;