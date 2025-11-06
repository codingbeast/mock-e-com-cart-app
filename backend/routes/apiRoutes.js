const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const productController = require('../controllers/productController');
const cartController = require('../controllers/cartController');

router.get('/products', productController.getProducts);

// Protected cart routes
router.get('/cart', authMiddleware, cartController.getCart);
router.post('/cart', authMiddleware, cartController.addToCart);
router.delete('/cart/:id', authMiddleware, cartController.removeFromCart);
router.put('/cart/:id',authMiddleware, cartController.updateCartItem);
router.post('/checkout', authMiddleware, cartController.checkout);

module.exports = router;
