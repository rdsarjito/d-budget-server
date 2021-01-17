const mongoose = require('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema({
  description: String,
  amount: String,
  date: String,
});

mongoose.model('incomes', incomeSchema);