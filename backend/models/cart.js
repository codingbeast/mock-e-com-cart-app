const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product');

const Cart = sequelize.define('Cart', {
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Cart.belongsTo(Product, { foreignKey: 'productId', onDelete: 'CASCADE' });
Product.hasMany(Cart, { foreignKey: 'productId' });

module.exports = Cart;
