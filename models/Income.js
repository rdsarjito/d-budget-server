const mongoose = require('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema({
  description: String,
  amount: String,
});

mongoose.model('incomes', incomeSchema);