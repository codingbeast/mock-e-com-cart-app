// backend/seed.js
const { Product, syncDB } = require('./models');

const seed = async () => {
  await syncDB();

  const count = await Product.count();
  if (count > 0) {
    console.log('Products already exist. Skipping seed.');
    return;
  }

  await Product.bulkCreate([
    { name: "Wireless Mouse", price: 799 },
    { name: "Mechanical Keyboard", price: 2499 },
    { name: "Laptop Stand", price: 1299 },
    { name: "Bluetooth Headphones", price: 1999 },
    { name: "USB-C Hub", price: 999 },
  ]);

  console.log('✅ Products seeded successfully!');
};

seed();
