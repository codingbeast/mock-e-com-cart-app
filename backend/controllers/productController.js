// backend/controllers/productController.js
const { Product } = require('../models');

exports.getProducts = async (req, res) => {
  try {
    // Get pagination params from query
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10; // default 10 per page
    const offset = (page - 1) * limit;

    // Fetch products with pagination
    const { count, rows } = await Product.findAndCountAll({
      offset,
      limit,
      order: [['id', 'ASC']], // optional: sort by ID
    });

    // Build pagination metadata
    const totalPages = Math.ceil(count / limit);

    res.json({
      data: rows,
      meta: {
        page,
        limit,
        totalItems: count,
        totalPages,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
