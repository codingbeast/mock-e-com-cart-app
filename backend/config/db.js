// backend/config/db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './store.db',
  logging: false, // disable console logs for SQL
});

module.exports = sequelize;
