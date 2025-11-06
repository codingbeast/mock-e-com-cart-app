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

syncDB().then(() => {
  app.listen(PORT, () => console.log(`🚀 Server ready at http://localhost:${PORT}`));
});
