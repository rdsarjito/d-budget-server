const mongoose = require('mongoose');
const { Schema } = mongoose;

const expenseSchema = new Schema({
  description: String,
  amount: String,
  typeBalance: String,
  date: Date,
});

mongoose.model('expenses', expenseSchema);