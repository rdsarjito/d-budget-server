const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');

mongoose.connect(keys.mongoURI);

require('./models/Income');
require('./models/Expense');
require('./models/Category');
require('./models/User');

const incomeRoutes = require('./routes/income');
const expenseRoutes = require('./routes/expense');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/income', incomeRoutes);
app.use('/expense', expenseRoutes);

require('./routes/authRoutes')(app);
require('./routes/balanceRoutes')(app);

const PORT = 5000;

app.listen(PORT);