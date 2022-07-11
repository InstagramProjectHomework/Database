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

//Compare password method. Attempt #1. Talk with Backend for its use.
userSchema.methods.comparePassword = async function (password) {
  if (!password) throw new Error('Password is missing, can not compare');

  try {
    const result = await bcrypt.compare(password, this.password);
    return result;
  } catch (error) {
    console.log('Error while comparing password!', error.message);
  }
};

module.exports = mongoose.model('User', userSchema);