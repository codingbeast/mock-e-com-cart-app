const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('./product');
const User = require('./user'); // 👈 make sure this exists

const Cart = sequelize.define('Cart', {
  qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
});

// 🧩 Associations
Cart.belongsTo(Product, { foreignKey: 'ProductId', onDelete: 'CASCADE' });
Product.hasMany(Cart, { foreignKey: 'ProductId' });

Cart.belongsTo(User, { foreignKey: 'UserId', onDelete: 'CASCADE' }); // 👈 add this
User.hasMany(Cart, { foreignKey: 'UserId' });

module.exports = Cart;
