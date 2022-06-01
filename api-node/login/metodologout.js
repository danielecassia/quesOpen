const { QueryTypes } = require('sequelize');
const sequelize = require('../database/index');

class MetodoLogout {
  async getLogout() {
    const logout = await sequelize.query("TRUNCATE TABLE sessions");
    return logout;
  }
}

module.exports = new MetodoLogout();