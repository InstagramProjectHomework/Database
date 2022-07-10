const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  followers: {
    type: Number,
    required: false
  },
  followed: {
    type: Number,
    required: false
  },
  posts: {
    type: Number,
    required: false
  }
});

module.exports = mongoose.model('User', userSchema);