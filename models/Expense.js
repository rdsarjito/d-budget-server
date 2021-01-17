const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
  description: String,
  amount: String,
  date: String,
});

mongoose.model('expenses', expenseSchema);