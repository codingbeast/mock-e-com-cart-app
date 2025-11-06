const cartService = require('../services/cartService');

exports.getCart = async (req, res) => {
  res.json(await cartService.getCart());
};

exports.addToCart = async (req, res) => {
  try {
    const { productId, qty } = req.body;
    await cartService.addToCart(productId, qty);
    res.json({ message: 'Added to cart' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.removeFromCart = async (req, res) => {
  await cartService.removeFromCart(req.params.id);
  res.json({ message: 'Item removed' });
};

exports.checkout = async (req, res) => {
  const receipt = await cartService.checkout();
  res.json(receipt);
};
