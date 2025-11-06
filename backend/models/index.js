const sequelize = require('../config/db');
const Product = require('./product');
const Cart = require('./cart');
const User = require('./user');

const syncDB = async () => {
  await sequelize.sync({ alter: true });
  console.log('✅ Database synchronized');
};

module.exports = { sequelize, Product, Cart,User, syncDB };
