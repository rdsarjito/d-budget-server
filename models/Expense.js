const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
  description: String,
  amount: String,
  category: String,
  date: Date,
  typeBalance: String
});

mongoose.model('expenses', expenseSchema);