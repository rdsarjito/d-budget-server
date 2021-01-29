const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  category: String,
  amount: Number,
  color: String,
  date: Date,
});

mongoose.model('category', categorySchema);