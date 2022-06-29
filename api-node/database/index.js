// configuração do bd pro uso e definicao das infos do bd (que estao no arquivo .env)
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    timezone: '-03:00',
  },

);

module.exports = sequelize; 