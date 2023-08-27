const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'path-to-your-database.db', // Update the path
});

module.exports = sequelize;