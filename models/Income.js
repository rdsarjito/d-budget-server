const mongoose = require('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema({
  description: String,
  amount: String,
  category: String,
  typeBalance: String,
  date: Date,
});

mongoose.model('incomes', incomeSchema);