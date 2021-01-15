const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

const app = express();

app.use(bodyParser.json());
app.use(cors());

require('./routes/incomeRoutes')(app);

const PORT = 5000;

app.listen(PORT);