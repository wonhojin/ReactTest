const express = require('express');
const app = express();
const api = require('./routes/index');
const PORT = 3001;

const cors = require('cors');
app.use(cors());

app.use(express.static('shop_images'));

app.use('/api', api);

app.listen(PORT, () =>
  console.log('Node.js Server is ruuning on port 3001...'),
);
