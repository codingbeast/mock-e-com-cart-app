const express = require('express');
const cors = require('cors');
const { syncDB } = require('./models');
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);

const PORT = 5000;
const sequelize = require('./config/db');

sequelize.sync()// or { force: true } to rebuild everything
  .then(() => console.log('🗃️ Database synced successfully'))
  .catch(err => console.error('❌ Database sync error:', err));

syncDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}`));
});
