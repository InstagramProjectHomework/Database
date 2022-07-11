const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

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

//Hashing of password. Attempt #1
userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    bcrypt.hash(this.password, 10, (err, hash) => {
      if (err) return next(err);

      this.password = hash;
      next();
    });
  }
});

module.exports = mongoose.model('User', userSchema);