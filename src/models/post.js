const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  likes:{
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Post', postSchema);