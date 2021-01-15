const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');
require('./models/Income');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(cors());

require('./routes/incomeRoutes')(app);

const PORT = 5000;

app.listen(PORT);