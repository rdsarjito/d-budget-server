const mongoose = require('mongoose');
const { Schema } = mongoose;

const incomeSchema = new Schema({
  description: String,
  amount: String,
  category: String,
  date: Date,
  typeBalance: String
});

mongoose.model('incomes', incomeSchema);