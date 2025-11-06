const cartService = require('../services/cartService');
const { Cart, Product } = require('../models');

exports.getCart = async (req, res) => {
  res.json(await cartService.getCart());
};

// controllers/cartController.js
exports.addToCart = async (req, res) => {
  const userId = req.user.id;
  const { productId, qty, mode } = req.body;

  const product = await Product.findByPk(productId);
  if (!product) return res.status(404).json({ message: 'Product not found' });

  let item = await Cart.findOne({ where: { ProductId: productId, UserId: userId } });

  if (item) {
    if (mode === 'set') item.qty = qty; // 👈 direct replace
    else item.qty += qty;              // 👈 default: add more
    await item.save();
  } else {
    item = await Cart.create({ ProductId: productId, UserId: userId, qty });
  }

  res.json({ message: 'Cart updated successfully', item });
};


exports.removeFromCart = async (req, res) => {
  await cartService.removeFromCart(req.params.id);
  res.json({ message: 'Item removed' });
};

exports.checkout = async (req, res) => {
  const receipt = await cartService.checkout();
  res.json(receipt);
};

// 🧩 Update cart item quantity
exports.updateCartItem = async (req, res) => {
  try {
    const userId = req.user.id;       // from auth middleware
    const { id } = req.params;        // cart item ID
    const { qty } = req.body;         // new quantity

    // 🧠 Validate input
    if (!qty || qty < 1) {
      return res.status(400).json({ message: 'Quantity must be 1 or greater.' });
    }

    // 🕵️ Find the item in user's cart
    const cartItem = await Cart.findOne({ where: { id, UserId: userId } });
    if (!cartItem) {
      return res.status(404).json({ message: 'Cart item not found.' });
    }

    // 🔁 Update quantity
    cartItem.qty = qty;
    await cartItem.save();

    // 💰 Recalculate total
    const userCart = await Cart.findAll({
      where: { UserId: userId },
      include: [Product],
    });

    const total = userCart.reduce(
      (sum, item) => sum + item.qty * item.Product.price,
      0
    );

    return res.json({
      message: 'Cart item updated successfully 👑',
      item: {
        id: cartItem.id,
        ProductId: cartItem.ProductId,
        qty: cartItem.qty,
      },
      total,
    });
  } catch (error) {
    console.error('Error updating cart item:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
