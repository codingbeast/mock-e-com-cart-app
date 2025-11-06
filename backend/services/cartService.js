const { Cart, Product } = require('../models');

exports.getCart = async () => {
  const items = await Cart.findAll({
    include: Product,
  });

  const total = items.reduce(
    (sum, item) => sum + item.qty * item.Product.price,
    0
  );

  return { items, total };
};

exports.addToCart = async (productId, qty) => {
  const product = await Product.findByPk(productId);
  if (!product) throw new Error('Product not found');

  const existing = await Cart.findOne({ where: { productId } });

  if (existing) {
    existing.qty += qty;
    await existing.save();
  } else {
    await Cart.create({ productId, qty });
  }
};

exports.removeFromCart = async (id) => {
  await Cart.destroy({ where: { id } });
};

exports.checkout = async () => {
  const { items, total } = await this.getCart();
  await Cart.destroy({ where: {} });
  return {
    total,
    timestamp: new Date().toISOString(),
    message: 'Checkout successful, My Lord 👑',
  };
};
