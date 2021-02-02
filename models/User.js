const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  avatar: String
});

mongoose.model('users', userSchema);