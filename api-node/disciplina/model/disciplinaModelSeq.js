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
  }
});


disciplina.sync({ alter: false, force: false })
  .then(() => console.log('A tabela disciplina foi criada!'))
  .catch((error) => console.log(error));


module.exports = disciplina;