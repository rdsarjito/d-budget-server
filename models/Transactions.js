const mongoose = require('mongoose');
const { Schema } = mongoose;

const transactionSchema = new Schema({
  description: String,
  amount: String,
  type: String,
  date: Date,
});

mongoose.model('transactions', transactionSchema);