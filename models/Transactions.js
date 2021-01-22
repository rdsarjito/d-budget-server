const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
  description: String,
  amount: String,
  typeBalance: String,
  date: Date,
});

mongoose.model('transactions', transactionSchema);