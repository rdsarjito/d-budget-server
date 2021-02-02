const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');
require('./models/Income');
require('./models/Expense');
require('./models/Category');
require('./models/User');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/images', express.static('images'));

require('./routes/authRoutes')(app);
require('./routes/balanceRoutes')(app);

const PORT = 5000;

app.listen(PORT);